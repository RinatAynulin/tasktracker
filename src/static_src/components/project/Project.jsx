import React from 'react';
import PropTypes from 'prop-types';

import './../../styles.css';

class Task extends React.Component {
	static propTypes = {
		task: PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			author: PropTypes.shape({
				id: PropTypes.number,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				avatar: PropTypes.string,
			}),
		}),
	};

	render() {
		return (
				<div className="project">

				</div>
			);
	}
}

export default Task;