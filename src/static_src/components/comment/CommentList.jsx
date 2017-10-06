import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loadComments } from './../../actions/comments';
import { PAGE_SIZE } from './../../constants/apiUrls';

import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        commentList: PropTypes.arrayOf(PropTypes.number),
        loadComments: PropTypes.func.isRequired,
    }

    static defaultProps = {
        commentList: [],
        isLoading: false,
    }

    onScroll = (e) => {
        if (this.props.isLoading) {
            return;
        }
        let loadNext = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;
        console.log(loadNext);
        if (loadNext) {
            let page = Math.ceil(this.props.commentList.length / PAGE_SIZE.comment) + 1;
            this.props.loadComments(this.props.taskId, page, true);
        }
    }

    componentDidMount() {
        this.props.loadComments(this.props.taskId, 1, false);
    }

    render() {
        
        const comments = this.props.commentList.map(
            id => <Comment key={ id } id={ id } />,
        );
        return (
            <div className="comment-list" onScroll={this.onScroll}>
                <CommentForm/>
                { comments }
            </div>
        );
    }
}


const mapStateToProps = ({ comments, taskModal }) => {
    return {
        commentList: comments.commentList,
        isLoading: comments.isLoading,
        taskId: taskModal.selectedTask,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadComments }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(CommentList);