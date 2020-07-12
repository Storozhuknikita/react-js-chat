import React, {Component} from 'react';
import {List, ListItem, ListItemText, Button} from '@material-ui/core';
import {Link} from 'react-router-dom';

import {MessageForm} from 'components/MessageForm';
import {MessageList} from 'components/MessageList';

import './Messenger.css';

export class Messenger extends Component {
    render()
    {
        const {chats, messages, sendMessage, addChat, isLoading, isError} = this.props;

        if(isLoading){
            return (<div>Loading...</div>);
        }

        if(isError){
            return (<div>Error. Обновите страницу...</div>);
        }

        return (
            <div className="messenger">
                <List>
                    {chats.map((chat, index) => 
                        <ListItem key={index}>
                        <Link to={chat.link}>
                            <ListItemText primary={chat.name} />
                        </Link>
                    </ListItem>)}
                    <Button onClick={addChat}>
                        <ListItemText primary="Create chat" />
                    </Button>
                </List>
                {messages ? <MessageList items={messages} /> : 'Пожалуйста, выберите чат'}
                {messages && <MessageForm onSend={sendMessage} />}
            </div>
        );
    }
}