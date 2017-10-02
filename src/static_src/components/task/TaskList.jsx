import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Task from './Task';
import TaskForm from './TaskForm';
import statusMapping from './../../constants/statusMapping'

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


	render() {
		const tasks = this.props.tasks.map(
			item => {
				return <Task key={item.id} task={item}/>;
			}
			);

		return (
			<div className="task-list">
				<h2> {this.props.listName} </h2>
				<TaskForm status={this.props.status} projectId={this.props.projectId}/>

				{tasks}

			</div>
		);
	}
}

const mapStateToProps = ({ tasks, projects }, ownProps) => {
		const tasksToShow = [];
		const status = statusMapping[ownProps.listName];
		tasks.taskList.map(
			taskId => {
				let task = tasks.tasks[taskId];
				if (task.status == status) {
					tasksToShow.push(task);
				}
			});
		return {
			listName: ownProps.listName, 
			tasks: tasksToShow,
			projectId: projects.selectedProject,
			status,
		};
	// }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);