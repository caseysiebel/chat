import React from 'react';

import Messages from './Messages';
import Form from './Form';

class Chat extends React.Component {
    render() {
        return (
            <div className="chat">
                <Messages />
                <Form />
            </div>
        );
    }
}

export default Chat;
