import React from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:3000');

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(e) {
        e.preventDeafult();
        const input = e.currentTarget.querySelector('input');
        //this.props.sendMessage(input.value);
        socket.emit('chat message', input.value);
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
const sendMessage = (msg) => ({
    type: 'SEND_MESSAGE',
    message: msg
});
const mapStateToProps = ({ }); 
const connectedForm = connect(mapStateToProps, sendMessage)(Form);

export default connectedForm;
