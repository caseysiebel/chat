import React from 'react';

import Messages from './Messages';
import Form from './Form';

import io from 'socket.io-client';

class Chat extends React.Component {

    constructor(props){
        super(props);
        this.socket = io('http://localhost:3001');
        this.socket.on('chat message', (msg) => {
            console.log('client msg', msg)
        });
    }
    render() {
        return (
            <div className="chat">
                <Messages />
                <Form socket={ this.socket }/>
            </div>
        );
    }
}

export default Chat;
