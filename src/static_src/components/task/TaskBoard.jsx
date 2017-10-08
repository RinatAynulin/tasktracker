import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, push } from 'redux';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import TaskList from './TaskList';
import Task from './Task';
import CommentList from './../comment/CommentList';
import ProjectHeader from './../project_header/ProjectHeader';

import { closeModal } from './../../actions/taskModal';
import { loadTasks } from './../../actions/tasks';
import { selectProject } from './../../actions/projects';

import apiUrls from './../../constants/apiUrls';
import statusMapping from './../../constants/statusMapping';

import './../../styles.css';

class TaskBoard extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool,
        loadTasks: PropTypes.func.isRequired,
        selectedProject: PropTypes.number,
        server: PropTypes.bool,
        addToPromises: PropTypes.func,
    };

    static defaultProps = {
        server: false,
        addToPromises: () => {},
    };

    constructor(props) {
        super(props);
        if (SERVER) {
            // this.props.addToPromises(this.props.selectProject(this.props.match.params.projectId));
        }
    }

    componentDidMount() {
        if (!this.props.isServerRendering) {
            this.props.selectProject(this.props.match.params.projectId);
        }
    }

    render() {
        // if (this.props.isLoading) {
        //  return <div className="task-board">Loading...</div>;
        // }
        if (this.props.selectedProject <= 0) {
            return <div className="task-board">Select project, pls</div>;
        }
        console.log(Object.getOwnPropertyNames(statusMapping));
        const taskLists = Object.getOwnPropertyNames(statusMapping).map(
            (listName) => (
                <div className="task-board-row">
                    <TaskList key={statusMapping[listName]} listName={listName} addToPromises={this.props.addToPromises}/>
                </div>
                )
            );
        return (
                <div>
                    <ProjectHeader/>
                    <ReactModal className="modal-content" isOpen={this.props.showModal} onRequestClose={this.props.closeModal} contentLabel="Minimal Modal Example">

                          <Task task={this.props.selectedTask}/>
                          <CommentList/>

                    </ReactModal>
                    <div className="task-board">
                            {taskLists}
                    </div>
                </div>
            );
    }
}

const mapStateToProps = ({ SSR, tasks, projects, taskModal }) => {
    return {
        isLoading: tasks.isLoading,
        selectedProject: projects.selectedProject,
        showModal: taskModal.showModal,
        selectedTask: tasks.tasks[taskModal.selectedTask],
        isServerRendering: SSR.serverRendering,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadTasks, closeModal, selectProject }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskBoard);