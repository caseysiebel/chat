import React from 'react';

class Message extends React.Component {
    render() {
        const { text, sender, timestamp } = this.props.data;
        return (
            <li className="message">
                <span className="sender">{ sender }</span>
                <span className="timestamp">{ timestamp }</span>
                <span className="text">{ text }</span>
            </li>
        );
    }
}

export default Message;
