import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            usernameValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }, () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid;

        //TO-DO: make this interact w/ DB

        switch (fieldName) {
            case 'username':
                usernameValid = value == 'admin';
                break;
            case 'password':
                passwordValid = value == 'supersecure';
                break;
            default:
                break;
        }
        this.setState({
            usernameValid: usernameValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.usernameValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <form className="demoForm">
                <h2>Sign In</h2>
                <div className="panel panel-default">
                </div>
                <div className={`form-group`}>
                    <label htmlFor="username">Username</label>
                    <input type="text" required className="form-control" name="username"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.handleUserInput} />
                </div>
                <div className={`form-group`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleUserInput} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Log in</button>
            </form>
        )
    }
}

export default Form;