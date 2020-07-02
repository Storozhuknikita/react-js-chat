import React, {Component} from 'react';
import {List, ListItem, ListItemText} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.css';

export class Messenger extends Component {
    //interval = null;
    // templateMessages = ['Hi!', 'Hello!', 'How are you?'];

    // componentDidMount(){
    //     this.interval = setInterval(() => {
    //         const randIndex = Math.floor(Math.random() * this.templateMessages.length);
    //         this.setState({
    //             messages: this.state.messages.concat([{text: this.templateMessages[randIndex], author: 'Igor'}])
    //         });
    //     }, 5000);
    // }

    // componentDidUpdate()
    // {
    //     const {author} = this.messages[this.messages.length - 1];
    //     if(this.messages[this.messages.length - 1].author !== 'Bot'){
    //         setTimeout(() => {
    //             this.handleMessageSend({text: `Привет, ${author}! Это автоответ бота!`, author: 'Bot'});
    //         }, 2000);
    //     }
    // }

    render()
    {
        const {chats, messages, sendMessage} = this.props
        return (
            <div className="messenger">
                <List>
                    {chats.map((chat, index) => 
                        <ListItem key={index}>
                        <Link to={chat.link}>
                            <ListItemText primary={chat.name} />
                        </Link>
                    </ListItem>)}
                </List>
                {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        );
    }
}