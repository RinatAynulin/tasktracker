import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Task from './Task';
import TaskForm from './TaskForm';
import statusMapping from './../../constants/statusMapping'
import { loadTasks } from './../../actions/tasks';

import apiUrls from './../../constants/apiUrls';
import { PAGE_SIZE } from './../../constants/apiUrls';
import './../../styles.css';


class TaskList extends React.Component {

	static propTypes = {
		listName: PropTypes.string,
		tasks: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
	}; 

	static defaultProps = {
		listName: '',
		tasks: [],
	}

	onScroll = (e) => {
		if (this.props.isLoading) {
			return;
		}
		let loadNext = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;
		if (loadNext) {
			let page = Math.ceil(this.props.taskList.length / PAGE_SIZE.task) + 1;
			this.props.loadTasks(apiUrls.task + `?page=${page}&project=${this.props.projectId}`, true);
		}
	}

	render() {
		const tasks = this.props.tasks.map(
			item => {
				return <Task key={item.id} task={item}/>;
			}
			);

		return (
			<div>
				<h2> {this.props.listName} </h2>
				<TaskForm status={this.props.status} projectId={this.props.projectId}/>

				<div className="task-list" onScroll={this.onScroll}>
					{tasks}
				</div>

			</div>
		);
	}
}

const mapStateToProps = ({ tasks, projects }, ownProps) => {
		const tasksToShow = [];
		const taskList = []; // ids
		const status = statusMapping[ownProps.listName];
		tasks.taskList.map(
			taskId => {
				let task = tasks.tasks[taskId];
				if (task.status == status) {
					tasksToShow.push(task);
					taskList.push(task.id);
				}
			});
		return {
			listName: ownProps.listName, 
			tasks: tasksToShow,
			taskList,
			projectId: projects.selectedProject,
			status,
		};
	// }
};

const mapDispatchToProps = (dispatch) => {
	   return bindActionCreators({ loadTasks }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);