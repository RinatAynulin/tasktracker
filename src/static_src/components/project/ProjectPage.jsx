import React from 'react';
import ProjectList from './ProjectList';
import ProjectForm from './ProjectForm';

class ProjectPage extends React.Component {

	render() {
		return (
			<div className="project-page">
				<h2> My Projects </h2>
				<ProjectForm/>
				<ProjectList/>
			</div>
		);
	}
}

export default ProjectPage;
