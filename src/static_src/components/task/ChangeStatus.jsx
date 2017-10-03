import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { changeStatus } from './../../actions/tasks';
import statusMapping from './../../constants/statusMapping'

const STATUS_LIST = ['New', 'In progress', 'Done'];

class ChangeStatus extends React.Component {
    static propTypes = {
        changeStatus: PropTypes.func,
        taskId: PropTypes.number,
        authorId: PropTypes.number,
        project_id: PropTypes.number,
        text: PropTypes.string,
        userId: PropTypes.number,
        status: PropTypes.number,
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (status) => {
        // e.preventDefault();
        // if (this.props.isLoading) {
        //     return;
        // }

        const body = JSON.stringify({
            taskId: this.props.taskId, 
            status, 
            project_id: this.props.project_id, 
            text: this.props.text});

        // this.props.addTask(body);
        // this.setState({text: '', description: '',})
        this.props.changeStatus(this.props.taskId, body)
        console.log(status);
    }

    render() {
        const statuses = STATUS_LIST.map(
            (status) => <li key={statusMapping[status]}><a onClick={()=>this.onClick(statusMapping[status])}>{status}</a></li>
        );
        return (
            <div className="task-form">
                <form>
                    {this.props.authorId == this.props.userId ? (statuses) : ''}
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ tasks, auth }, ownProps) => {
        console.log('own props');
        console.log(ownProps);
        return {
            userId: auth.user.user.id,
            authorId: tasks.tasks[ownProps.taskId].author,
            status: tasks.tasks[ownProps.taskId].status,
            text: tasks.tasks[ownProps.taskId].text,
            project_id: tasks.tasks[ownProps.taskId].project,
        };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ changeStatus }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeStatus);