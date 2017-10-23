import React from 'react';

import Login from './Login';
import Messages from './Messages';
import Form from './Form';

import io from 'socket.io-client';

class Chat extends React.Component {
    constructor(props){
        super(props);
        this.socket = io('http://localhost:3001');
        this.socket.on('chat message', (msg) => {
            console.log('client msg', msg);
            this.props.messageReceived(msg);
        });
    }
    render() {
        const username = this.props.username;
        if (!username) {
            return <Login />
        }
        else {
            return (
                <div className="chat">
                    <Messages />
                    <Form socket={ this.socket }/>
                </div>
            );
        }
    }
}

const messageReceived = (msg) => ({ 
    type: 'MESSAGE_RECEIVED',
    payload: msg
})
const actions = { messageReceived };
console.log('actions', actions);

const mapStateToProps = ({ username }) => ({ username });

import { connect } from 'react-redux';
const connectedChat = connect(mapStateToProps, actions)(Chat);

export default connectedChat;
