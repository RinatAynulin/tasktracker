import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import { Switch, Route, Link, Redirect } from 'react-router-dom';

import apiUrls from './../constants/apiUrls';
import {getToken} from './../utils/utils';
import TaskBoard from './task/TaskBoard';
import LoginPage from './login/LoginPage';
import ProjectPage from './project/ProjectPage';
import Logout from './login/Logout';
import PrivateRoute from './login/PrivateRoute';
import Header from './main_header/Header';
import ProjectHeader from './project_header/ProjectHeader';
import { currentUser } from './../actions/auth';

import './../styles.css';

class App extends React.Component {

	static propTypes = {
		currentUser: PropTypes.func,
		redirectToLogin: PropTypes.func,
		isLoading: PropTypes.bool,
		isAuthenticated: PropTypes.bool,
	};

	state = {
		projectList: [],
		currentUser: {},
		isLoading: false
	}; 

	componentDidMount() {
		this.setState({isLoading: true});

		fetch(apiUrls.project, {
		  method: "GET",
		  headers: {
		    Authorization: 'Token 55b7d59a965819fa983a7328e6893b334ded67f6'
		  }	}).then(
			(body) => body.json()
		).then((json) => this.setState({projectList: json.results})); // fixme

		fetch(apiUrls.task, {
		  method: "GET",
		  headers: {
		    Authorization: 'Token 55b7d59a965819fa983a7328e6893b334ded67f6'
		  }	}).then(
			(body) => body.json()
		).then((json) => this.setState({isLoading: false, taskList: json.results})); 
	}
// 
				// <TaskBoard isLoading={this.state.isLoading} taskList={this.state.taskList}/>

	componentWillMount() {
		if (!this.props.isAuthenticated) {
			this.props.redirectToLogin();
		}
		this.props.currentUser();
	}

	render() {
		return (
			<div className="root-div">
				<Link to="/login">Log in</Link>
				<Link to="/logout"> Logout </Link>
				<Header currentUser={this.state.currentUser} projectList={this.state.projectList}/>
				<ProjectHeader projectList={this.state.projectList}/>
				<Link to="/tasklist/">Список</Link>
				<Link to="/projects">All projects</Link>
                <h1>TaskTracker</h1>
                <Switch>
                    <Route exact path="/" component={ () => <h2>Allo allo</h2> } />
                    <PrivateRoute exact path="/tasklist/" isAuthenticated={ this.props.isAuthenticated } component={ TaskBoard } />
                    <PrivateRoute exact path="/projects/" isAuthenticated={ this.props.isAuthenticated }component={ ProjectPage } />
                    <Route exact path="/login/" component= { LoginPage }/>
                    <Route exact path="/logout/" component = { Logout }/>
                </Switch>
			</div>
			);
	}
}

const mapStateToProps = ({ auth }) => {
        return {
            isLoading: auth.user.isLoading,
            isAuthenticated: auth.authentication.isAuthenticated,
        };
    // }
};

const mapDispatchToProps = (dispatch) => {
    return Object.assign({
    	redirectToLogin: () => dispatch(push('/login')),
    }, bindActionCreators({ currentUser }, dispatch));
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// export default App;