import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';

import { Switch, Route, Link, Redirect } from 'react-router-dom';

import apiUrls from './../constants/apiUrls';
import TaskBoard from './task/TaskBoard';
import LoginPage from './login/LoginPage';
import ProjectPage from './project/ProjectPage';
import Logout from './login/Logout';
import PrivateRoute from './login/PrivateRoute';
import Header from './main_header/Header';
import { currentUser } from './../actions/auth';
import { serverFlag } from './../actions/serverFlag';


import './../styles.css';

class App extends React.Component {

	static propTypes = {
		server: PropTypes.bool,
		currentUser: PropTypes.func,
		redirectToLogin: PropTypes.func,
		isLoading: PropTypes.bool,
		addToPromises: PropTypes.func,
	};

	static defaultProps = {
        server: false,
        addToPromises: () => {},
    };

	state = {
		projectList: [],
		currentUser: {},
		isLoading: false
	}; 

	componentDidMount() {
		this.setState({isLoading: true});
		this.props.serverFlag();
	}
	
	componentWillMount() {
		this.props.currentUser();
	}

	render() {
		const MyProjectPage = (props) => {
			return (<ProjectPage server={ this.props.server } addToPromises={ this.props.addToPromises }/>);
		}

		return (
			<div className="root-div">
				<Header currentUser={this.state.currentUser}/>
                <Switch>
                    <PrivateRoute path="/tasklist/:projectId" component={ TaskBoard } />
                    <PrivateRoute exact path="/" component={ MyProjectPage }/>
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
        };
    // }
};

const mapDispatchToProps = (dispatch) => {
    return Object.assign({
    	redirectToLogin: () => dispatch(push('/login')),
    	redirectToProjects: () => dispatch(push('/projects')),
    }, bindActionCreators({ currentUser, serverFlag }, dispatch));
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

// export default App;