import React from 'react';

import Message from './Message';
class Messages extends React.Component {
    componentDidMount(){
        const request = async () => {
            const response = await fetch('/messages');
            const json = await response.json();
            /*
            const messages = JSON.parse(json)
            if (messages.length) {
                populateMessages(messages);
            }
            */
        };
        request();
    }
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
const populateMessages = (messages) => ({
    type: 'POPULATE_MESSAGES',
    payload: messages
})
const actions = { populateMessages };

const mapStateToProps = ({ messages }) => ({ messages });
import { connect } from 'react-redux';
const connectedMessages = connect(mapStateToProps, actions)(Messages);
export default connectedMessages;
