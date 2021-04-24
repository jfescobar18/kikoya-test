import React, { Component } from 'react';
import { handleResponse } from '../../helpers';
import swal from 'sweetalert';
import Loader from '../../components/Loader';

class Login extends Component {
    constructor(props) { // Init props and state
        super(props);
        this.state = {
            Username: '',
            Password: '',
            UsernameAlert: false,
            PasswordAlert: false,
            loading: false
        };

        this.Username = this.handleUsername.bind(this);
        this.Password = this.handlePassword.bind(this);
    }

    componentDidMount() {
        if(sessionStorage.getItem('session')) {
            this.props.history.push('/');
        }
    }

    handleUsername = ({ target }) => {
        this.setState({
            Username: target.value
        });
    }
    handlePassword = ({ target }) => {
        this.setState({
            Password: target.value
        });
    }

    handleLogin = () => {
        const { loginRequest } = this.props;

        let username = this.state.Username,
            password = this.state.Password;

        let _UsernameAlert = this.state.Username.length <= 0;
        let _PasswordAlert = this.state.Password.length <= 0;

        this.setState({
            UsernameAlert: _UsernameAlert,
            PasswordAlert: _PasswordAlert
        });

        if (!this.state.UsernameAlert && !this.state.PasswordAlert) {
            this.setState({ loading: true });

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            };

            fetch('/users/login', requestOptions)
                .then(handleResponse)
                .then(user => {
                    sessionStorage.setItem('session', JSON.stringify(user));
                    loginRequest(user);
                }).catch(error => {
                    console.log(error);

                    this.setState({
                        Username: '',
                        Password: ''
                    });

                    swal({
                        title: "Login Failure",
                        text: "Username or password is incorrect",
                        icon: "warning",
                    });
                }).finally(() => {
                    this.setState({ loading: false });
                    this.props.history.push('/');
                });
        }
    }

    render() {
        return (
            <div className="login" >

                { this.state.loading ? <Loader /> : null}

                <div className="wrapper fadeInDown">
                    <div className="formContent">
                        <h2 className="active"> Log In </h2>

                        <div className="fadeIn first">
                            <i className="fas fa-user-circle icon"></i>
                        </div>

                        <form>
                            <input type="text" onChange={this.handleUsername} value={this.state.Username} className="fadeIn second" name="login" placeholder="login" />
                            <small className={this.state.UsernameAlert ? "active" : ""} >This field cannot be empty</small>

                            <input type="password" onChange={this.handlePassword} value={this.state.Password} className="fadeIn third" name="login" placeholder="password" />
                            <small className={this.state.PasswordAlert ? "active" : ""} >This field cannot be empty</small>

                            <input type="button" onClick={this.handleLogin} className="fadeIn fourth" value="Log In" />
                        </form>

                        <div className="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;