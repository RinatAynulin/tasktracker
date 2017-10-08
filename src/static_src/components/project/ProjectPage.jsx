import React from 'react';
import PropTypes from 'prop-types';

import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

class ProjectPage extends React.Component {

	static propTypes = {
		server: PropTypes.bool,
		addToPromises: PropTypes.func,
	};

	static defaultProps = {
		server: false,
		addToPromises: () => {},
	}

	render() {
		return (
			<div className="project-page">
				<h2> My Projects </h2>
				<ProjectForm/>
				<ProjectList server={ this.props.server } addToPromises={ this.props.addToPromises }/>
			</div>
		);
	}
}

export default ProjectPage;
