import React, {Component} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.css';

export class Messenger extends Component {
    state = {
        chats: {
            '1': {
                name: 'Chat 1',
                messages: [
                    {
                        text: 'Текстовое сообщение 1',
                        author: 'Igor'
                    },
                ],
            },
            '2': {
                name: 'Chat 2',
                messages: [
                    {
                        text: 'Текстовое сообщение 2',
                        author: 'Igor'
                    },
                ],
            },
            '3': {
                name: 'Chat 3',
                messages: [
                    {
                        text: 'Текстовое сообщение 3',
                        author: 'Igor'
                    },
                ],
            },
        },
    };
    //interval = null;
    templateMessages = ['Hi!', 'Hello!', 'How are you?'];

    // componentDidMount(){
    //     this.interval = setInterval(() => {
    //         const randIndex = Math.floor(Math.random() * this.templateMessages.length);
    //         this.setState({
    //             messages: this.state.messages.concat([{text: this.templateMessages[randIndex], author: 'Igor'}])
    //         });
    //     }, 5000);
    // }

    componentDidUpdate()
    {
        const {author} = this.messages[this.messages.length - 1];
        if(this.messages[this.messages.length - 1].author !== 'Bot'){
            setTimeout(() => {
                this.handleMessageSend({text: `Привет, ${author}! Это автоответ бота!`, author: 'Bot'});
            }, 2000);
        }
    }

    handleMessageSend = (message) => {
        const {chats} = this.state;
        const {match} = this.props;

        const chat = chats[match.params.id];
        const messages = this.messages.concat([message]);
        chat.messages = messages;

        this.setState({
            chats: {
                ...chats,
                [match.params.id]: chat
            }
        });
    }

    get messages(){
        const {chats} = this.state;
        const {match} = this.props;

        let messages = null;

        if(match && chats[match.params.id]){
            messages = chats[match.params.id].messages;
        }

        return messages;
    }

    render()
    {
        const {chats} = this.state;

        let chatsComponents = [];
        for(let chatKey in chats){
            chatsComponents.push(
                <ListItem key={chatKey}>
                    <Link to={`/chats/${chatKey}`}>
                        <ListItemText primary={chats[chatKey].name} />
                    </Link>
                </ListItem>
            );
        }

        return (
            <div className="messenger">
                <List>
                    {chatsComponents}
                </List>
                {this.messages ? <MessageList items={this.messages} /> : 'Пожалуйста, выберите чат'}
                {this.messages && <MessageForm onSend={this.handleMessageSend} />}
            </div>
        );
    }
}