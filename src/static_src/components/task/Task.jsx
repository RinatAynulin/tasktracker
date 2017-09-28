import React from 'react';
import PropTypes from 'prop-types';

import './../../styles.css';

class Task extends React.Component {
	static propTypes = {
		task: PropTypes.shape({
			id: PropTypes.number,
			description: PropTypes.string,
			text: PropTypes.string,
			section: PropTypes.string,
			status: PropTypes.number,
			author: PropTypes.shape({
				first_name: PropTypes.string,
				last_name: PropTypes.string
			}),
		}),
	};

	render() {
		return (
				<div className="task">
					<div className="task__header">
						<div className="task__header-text">{ this.props.task.text }</div>
						<div className="task__header-user">{ this.props.task.author.first_name + ' ' + this.props.task.author.last_name }</div>
					</div>
					<div className="task__content">
						<div className="task__content-description">{ this.props.task.description }</div>
						<div className="task__content-section">{ this.props.task.section }</div>
					</div>
				</div>
			);
	}
}

export default Task;