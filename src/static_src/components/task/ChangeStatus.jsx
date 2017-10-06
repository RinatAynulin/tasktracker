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

    onClick = (event, status) => {
        const body = JSON.stringify({
            taskId: this.props.taskId, 
            status, 
            project_id: this.props.project_id, 
            text: this.props.text});

        this.props.changeStatus(this.props.taskId, body)
        return false;
    }

    render() {
        const statuses = STATUS_LIST.map(
            (status) => <li key={statusMapping[status]}><a onClick={(e)=>this.onClick(event, statusMapping[status])}>{status}</a></li>
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