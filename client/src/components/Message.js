import React from 'react';

class Message extends React.Component {
    render() {
        return (
            <li className="message">
                { this.props.body }
            </li>
        );
    }
}

export default Message;
