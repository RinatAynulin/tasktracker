import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, push } from 'redux';
import { connect } from 'react-redux';

import TaskList from './TaskList';
import ProjectHeader from './../project_header/ProjectHeader';

import { loadTasks } from './../../actions/tasks';
import apiUrls from './../../constants/apiUrls';

import './../../styles.css';

const listNames = ['New', 'In progress', 'Done'];

class TaskBoard extends React.Component {

	static propTypes = {
		isLoading: PropTypes.bool,
		loadTasks: PropTypes.func.isRequired,
		selectedProject: PropTypes.number,
	};

	static defaultProps = {
		isLoading: false,
	};

	componentDidMount() {
		console.log('task is going to be load');
		this.props.loadTasks(apiUrls.task + `?project=${this.props.selectedProject}`);
	}

	render() {
		if (this.props.isLoading) {
			return <div className="task-board">Loading...</div>;
		}
		if (this.props.selectedProject <= 0) {
			return <div className="task-board">Select project, pls</div>;
		}
		const taskLists = listNames.map(
			(listName, i) => (
				<div className="task-board-row">
					<TaskList key={i} listName={listName}/>
				</div>
				)
			);
		return (
				<div>
					<ProjectHeader/>
					<div className="task-board">
							{taskLists}
					</div>
				</div>
			);
	}
}

const mapStateToProps = ({ tasks, projects }) => {
    return {
        isLoading: tasks.isLoading,
        selectedProject: projects.selectedProject,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadTasks }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);