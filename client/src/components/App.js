import React from 'react';

import Login from './Login';
import Chat from './Chat';

class App extends React.Component {
    render() {
        const username = this.props.username;
        if (!username) {
            return <Login />
        }
        else {
            return <Chat />
        }
    }
}

const mapStateToProps = ({ username }) => ({ username });

import { connect } from 'react-redux';
const connectedApp = connect(mapStateToProps)(App);

export default connectedApp;
