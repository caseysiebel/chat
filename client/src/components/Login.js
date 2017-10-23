import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }
    onSubmitHandler(e) {
        e.preventDefault();
        const input = e.currentTarget.querySelector('input');
        const user = input.value;
        this.props.login(user);
        input.value = '';
    }
    render(){
        return (
            <form onSubmit={ this.onSubmitHandler } className="login">
                <input type='text' className='username' />
                <button type='submit'>Login</button>
            </form>
        );
    }
}

const login = (usr) => ({ 
    type: 'LOG_IN',
    payload: usr
});
const actions = { login };

const mapStateToProps = () => ({ });

import { connect } from 'react-redux';
const ConnectedLogin = connect(mapStateToProps, actions)(Login);
export default ConnectedLogin;
