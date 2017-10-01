import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import apiUrls from './../../constants/apiUrls';
import { login } from './../../actions/auth';

class LoginForm extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        isAuthenticated: PropTypes.bool,
        redirect: PropTypes.func,
        login: PropTypes.func,
    };

    state = {
        username: '',
        password: '',
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault();
        if (this.props.isLoading) {
            return;
        }

        const body = JSON.stringify(this.state);

        console.log(`login request with body ${body}`);
        // let body = new FormData();
        // body.append('username', this.state.login);
        // body.append('password', this.state.password);

        this.props.login(body);

        // this.setState({ isLoading: true });
        // fetch(apiUrls.task, {
        //     method: 'POST',
        //     credentials: 'include',
        //     body: JSON.stringify(this.state),
        //     headers: {
        //         'content-type': 'application/json',
        //     }
        // }).then(
        //     body => body.json(),
        // ).then(
        //     (json) => {
        //         this.setState({ isLoading: false });
        //         return this.props.onCreate(json);
        //     },
        // )
    }

    render() {
        if (this.props.isLoading) {
            return (<p> Logging in...</p>);
        }

        if (this.props.isAuthenticated) {
            this.props.redirect();
        }

        return (
            <div className="login-form">
                <form>
                    <div className="login-field-wrapper">
                        <input onChange={ this.onChange } value={ this.state.username } className="login-form-field" type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="login-field-wrapper">
                        <input onChange={ this.onChange } value={ this.state.password } className="login-form-field" type="password" name="password" placeholder="Password" />
                    </div>
                    <div className="login-field-wrapper">
                        <button onClick={ this.onClick }>Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => {
        return {
            isLoading: auth.isLoading,
            isAuthenticated: auth.authentication.isAuthenticated,
        };
    // }
};

const mapDispatchToProps = (dispatch) => {
    return Object.assign({}, bindActionCreators({ login }, dispatch), 
        {redirect: () => (dispatch(push('/tasklist')))});
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);