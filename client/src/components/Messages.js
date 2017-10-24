import React from 'react';

import Message from './Message';
class Messages extends React.Component {
    render() {
        console.log('props!!!!!', this.props);
        const messages = this.props.messages;
        console.log('messages', messages);
        return (
            <ul className="messages">
            { 
                messages && messages.map((msg, i) => <Message data={msg} key={i} />)
            }
            </ul>
        );
    }
}

const mapStateToProps = ({ messages }) => ({ messages });
import { connect } from 'react-redux';
const connectedMessages = connect(mapStateToProps)(Messages);
export default connectedMessages;
