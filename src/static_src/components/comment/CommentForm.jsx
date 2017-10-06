import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import apiUrls from './../../constants/apiUrls';
import { addComment } from './../../actions/comments';

class CommentForm extends React.Component {
    static propTypes = {
        addComent: PropTypes.func,
        idLoading: PropTypes.bool,
        taskId: PropTypes.number,
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault();

        const body = JSON.stringify(this.state);

        this.props.addComment(body);
        this.setState({text: '',})
    }

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            task: this.props.task,
        };
    }

    render() {
        return (
            <div className="comment-form">
                <form>
                    <div className="comment-field-wrapper">
                        <input onChange={ this.onChange } value={ this.state.text } className="comment-form-field" type="text" name="text" placeholder="Text" />
                        <div className="comment-field-wrapper">
                            <button onClick={ this.onClick }>Add</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ taskModal }) => {
        return {task: taskModal.selectedTask};
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addComment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);