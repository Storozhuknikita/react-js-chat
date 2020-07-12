import React, {Component} from 'react';
import {connect} from 'react-redux';
import {push} from 'connected-react-router';

import {Messenger} from 'components/Messenger';
import {chatsLoadApi, chatsSend, chatsAdd} from 'actions/chats';

class MessengerContainer extends Component {
    componentDidMount(){
        const {chatsLoadAction} = this.props;

        if(!this.props.chats.length){
            chatsLoadAction(); //Получение чатов
        }
    }

    handleMessageSend = (message) => {
        const {chatId, chatsSendAction} = this.props;

        chatsSendAction({
            ...message,
            chatId,
        }); 
    }

    handleChatsAdd = () => {
        const {chatsAddAction, newChatId, redirect} = this.props;
        const chatName = prompt('Введите имя чата');

        chatsAddAction(newChatId, chatName);
        redirect(newChatId);
    }

    render(){
        const {chats, messages, isLoading, isError} = this.props;

        const ownProps = {
            isError,
            isLoading, 
            addChat: this.handleChatsAdd,
            chats, 
            messages, 
            sendMessage: this.handleMessageSend,
        };

        return (
            <Messenger {...ownProps} />
        );
    }
}

/**
 * Для того, чтобы получить данные из store
 * @param {*} state 
 * @param {*} ownProps 
 */
function mapStateToProps(state, ownProps){
    const chats = state.chats.entries;
    const {match} = ownProps;

    let messages = null;

    if(match && chats[match.params.id]){
        messages = chats[match.params.id].messages;
    }

    let chatsArrayForShow = [];
    for(let key in chats){
        if(chats.hasOwnProperty(key)){
            chatsArrayForShow.push({name: chats[key].name, link: `/chats/${key}`});
        }
    }

    const lastId = Object.keys(chats).length ? Object.keys(chats).length: 0;

    return {
        chats: chatsArrayForShow,
        messages,
        chatId: match ? match.params.id: null,
        newChatId: lastId + 1,
        isLoading: state.chats.loading,
        isError: state.chats.error,
    }
}

/**
 * Для работы с actions
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch){
    return {
        chatsLoadAction: () => dispatch(chatsLoadApi()),
        chatsSendAction: (message) => dispatch(chatsSend(message)),
        chatsAddAction: (newChatId, chatName) => dispatch(chatsAdd(newChatId, chatName)),
        redirect: (id) => dispatch(push(`/chats/${id}`)),
    };
}

export const MessengerRedux = connect(mapStateToProps, mapDispatchToProps)(MessengerContainer);