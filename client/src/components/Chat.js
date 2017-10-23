import React from 'react';

import Login from './Login';

import Messages from './Messages';
import MessageForm from './MessageForm';

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
        return (
            <div className="chat">
                <Messages />
                <MessageForm socket={ this.socket }/>
            </div>
        );
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
