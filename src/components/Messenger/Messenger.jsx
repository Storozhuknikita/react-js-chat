import React, {Component} from 'react';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.css';

export class Messenger extends Component {
    state = {
        messages: [
            {
                text: 'Текстовое сообщение 1',
                author: 'Igor'
            }
        ],
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
        const {author} = this.state.messages[this.state.messages.length - 1];
        if(this.state.messages[this.state.messages.length - 1].author !== 'Bot'){
            setTimeout(() => {
                this.setState({
                    messages: this.state.messages.concat([{text: `Привет, ${author}! Это автоответ бота!`, author: 'Bot'}])
                });
            }, 2000);
        }
    }

    handleMessageSend = (message) => {
        this.setState({
            messages: this.state.messages.concat([message]),
        });
    }


    render()
    {
        const {messages} = this.state;

        return (
            <div className="messenger">
                <MessageList items={messages} />
                <MessageForm onSend={this.handleMessageSend} />
            </div>
        );
    }
}