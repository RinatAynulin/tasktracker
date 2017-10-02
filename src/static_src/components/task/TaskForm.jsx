import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import apiUrls from './../../constants/apiUrls';
import { addTask } from './../../actions/tasks';

class TaskForm extends React.Component {
    static propTypes = {
        addTask: PropTypes.func,
        idLoading: PropTypes.bool,
        projectId: PropTypes.number,
        status: PropTypes.number,
    };

    

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault();
        if (this.props.isLoading) {
            return;
        }

        const body = JSON.stringify(this.state);

        this.props.addTask(body);
        this.setState({text: '', description: '',})
    }

    constructor(props) {
        super(props);
        console.log(`Props: ${props.status}`);
        this.state = {
            text: '',
            description: '',
            assign_to_id: 1,
            project_id: props.projectId,
            status: props.status,
        };
    }

    render() {
        return (
            <div className="task-form">
                <form>
                    <div className="task-field-wrapper">
                        <input onChange={ this.onChange } value={ this.state.text } className="task-form-field" type="text" name="text" placeholder="Text" />
                    </div>
                    <div className="task-field-wrapper">
                        <input onChange={ this.onChange } value={ this.state.description } className="task-form-field" type="text" name="description" placeholder="description" />
                    </div>
                    <div className="task-field-wrapper">
                        <button onClick={ this.onClick }>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ tasks }) => {
        return {
            isLoading: tasks.form.isLoading,
        };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addTask }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);