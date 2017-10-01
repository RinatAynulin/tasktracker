import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { Switch, Route, Link } from 'react-router-dom';

import apiUrls from './../constants/apiUrls.js';
import TaskBoard from './task/TaskBoard';
import Header from './main_header/Header';
import ProjectHeader from './project_header/ProjectHeader';

import './../styles.css';

class App extends React.Component {

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

		// fetch(apiUrls.task, {
		//   method: "GET",
		//   headers: {
		//     Authorization: 'Token 55b7d59a965819fa983a7328e6893b334ded67f6'
		//   }	}).then(
		// 	(body) => body.json()
		// ).then((json) => this.setState({isLoading: false, taskList: json.results})); 


		fetch(apiUrls.currentUser, {
		  method: "GET",
		  headers: {
		    Authorization: 'Token 55b7d59a965819fa983a7328e6893b334ded67f6'
		  }	}).then(
			(body) => body.json()
		).then((json) => {
			this.setState({currentUser: json})
		});// fixme
	}
// 
				// <TaskBoard isLoading={this.state.isLoading} taskList={this.state.taskList}/>

	render() {
		return (
			<div className="root-div">
				<Link to="/login">Log in</Link>
				<Header currentUser={this.state.currentUser} projectList={this.state.projectList}/>
				<ProjectHeader projectList={this.state.projectList}/>
				<Link to="/tasklist/">Список</Link>
                <h1>TaskTracker</h1>
                <Switch>
                    <Route exact path="/" component={ () => <h2>jhdfbg</h2> } />
                    <Route exact path="/tasklist/" component={ TaskBoard } />
                </Switch>
			</div>
			);
	}
}

export default App;
