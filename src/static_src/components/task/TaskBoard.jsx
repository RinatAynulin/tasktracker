import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, push } from 'redux';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import TaskList from './TaskList';
import Task from './Task';
import ProjectHeader from './../project_header/ProjectHeader';

import { closeModal } from './../../actions/taskModal';
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
					<ReactModal className="modal-content" isOpen={this.props.showModal} onRequestClose={this.props.closeModal} contentLabel="Minimal Modal Example">

                      	  <Task task={this.props.selectedTask}/>

                    </ReactModal>
					<div className="task-board">
							{taskLists}
					</div>
				</div>
			);
	}
}

const mapStateToProps = ({ tasks, projects, taskModal }) => {
    return {
        isLoading: tasks.isLoading,
        selectedProject: projects.selectedProject,
        showModal: taskModal.showModal,
        selectedTask: tasks.tasks[taskModal.selectedTask],
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadTasks, closeModal }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);