import React from 'react';
import PropTypes from 'prop-types';

import User from './../user/User';
import './../../styles.css';

class Task extends React.Component {
	static propTypes = {
		task: PropTypes.shape({
			id: PropTypes.number,
			description: PropTypes.string,
			text: PropTypes.string,
			section: PropTypes.number,
			status: PropTypes.number,
			author: PropTypes.number,
	}),
	};

	render() {
		console.log(this.props);
		return (
				<div className="task">
					<div className="task__header">
						<div className="task__header-text">{ this.props.task.text }</div>
						<div className="task__header-user"> <User id={this.props.task.author}/> </div>
					</div>
					<div className="task__content">
						<div className="task__content-description">{ this.props.task.description }</div>
					</div>
				</div>
			);
	}
}

export default Task;