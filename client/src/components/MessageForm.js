import React from 'react';

//import io from 'socket.io-client';
//const socket = io('http://localhost:3001');

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(e) {
        e.preventDefault();
        const input = e.currentTarget.querySelector('input');
        const msg = input.value; 
        const { username, socket } = this.props;

        const payload = {
            text: msg,
            sender: username,
            timestamp: Date.now()
        }
        socket.emit('chat message', payload);
        input.value = '';
    }
    render() {
        return (
            <form 
                className="form"
                onSubmit={ this.onSubmitHandler }
            >
                <input type='text' />
                <button>Send</button>
            </form>
        );
    }
}

export default MessageForm;
