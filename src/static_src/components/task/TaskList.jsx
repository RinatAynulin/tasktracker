import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import statusMapping from './../../constants/statusMapping'

import './../../styles.css';

import { connect } from 'react-redux';

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
		const status = statusMapping[this.props.listName];
		const tasks = this.props.tasks.map(
			item => {
				return <Task key={item.id} task={item}/>;
			}
			);

		return (
			<div className="task-list">
				<h2> {this.props.listName} </h2>
				{tasks}

			</div>
		);
	}
}

const mapStateToProps = ({ tasks }, ownProps) => {
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
		};
	// }
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);