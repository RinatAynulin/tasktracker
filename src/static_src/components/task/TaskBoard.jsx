import React from 'react';
import PropTypes from 'prop-types';

import TaskList from './TaskList';
import Task from './Task';

import './../../styles.css';

const listNames = ['New', 'In progress', 'Done'];

class TaskBoard extends React.Component {

	static propTypes = {
		isLoading: PropTypes.bool,
		listName: PropTypes.string,
		taskList: PropTypes.arrayOf(PropTypes.shape(Task.propTypes)),
	}; 

	static defaultProps = {
		listName: '',
		isLoading: false,
		taskList: [],
	}

	render() {
		if (this.props.isLoading) {
			return <div className="task-board">Loading...</div>;
		}
		const taskLists = listNames.map(
			(listName, i) => (
				<div align="center" className="task-board-row">
					<TaskList key={i} listName={listName} taskList={this.props.taskList}/>
				</div>
				)
			);
		return (
				<div className="task-board">
						{taskLists}
				</div>
			);
	}
}

export default TaskBoard;