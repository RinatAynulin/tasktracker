import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';
import statusMapping from './../../constants/statusMapping'

import './../../styles.css';


class TaskList extends React.Component {

	static propTypes = {
		listName: PropTypes.string,
		taskList: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
	}; 

	static defaultProps = {
		listName: '',
		taskList: [],
	}


	render() {
		const status = statusMapping[this.props.listName];
		const tasks = this.props.taskList.filter(task => task.status == status).map(
			item => <Task key={item.id} task={item}/>
			);

		return (
			<div className="task-list">
				<h2> {this.props.listName} </h2>
				{tasks}

			</div>
		);
	}
}

export default TaskList;