import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import User from './../user/User';
import './../../styles.css';

class Comment extends React.Component {
	static propTypes = {
		id: PropTypes.number,
		author: PropTypes.number,
		text: PropTypes.string,
		task: PropTypes.number,
	};

	static defaultProps = {
		author: null, 
		task: null,
		text: '',
	}

	render() {
		return (
				<div className="comment">
					<div className="comment__header">
						<div className="comment__header-user"> <User id={this.props.author}/> </div>
					</div>
					<div className="comment__content">
						<div className="comment__content-text">{ this.props.text }</div>
					</div>
				</div>
			);
	}
}


const mapStateToProps = ({comments}, ownProps) => {
    return {
    	...comments.comments[ownProps.id]
    };
}

const mapDispatchToProps = (dispatch) => {
	return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
