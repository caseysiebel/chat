import React from 'react';

//import io from 'socket.io-client';
//const socket = io('http://localhost:3001');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(e) {
        e.preventDefault();
        const input = e.currentTarget.querySelector('input');
        this.props.socket.emit('chat message', input.value);
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

export default Form;
