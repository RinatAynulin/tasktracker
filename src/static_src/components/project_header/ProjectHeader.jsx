import React from 'react';
import PropTypes from 'prop-types';

import Project from './../project/Project';
import './../../styles.css';

class ProjectHeader extends React.Component {
	static propTypes = {
		projectList: PropTypes.arrayOf(PropTypes.shape(Project.PropTypes)),
	};

	static defaultProps = {
		projectList: [],
	};

	render() {
		const projectName = this.props.projectList.length > 0 ? this.props.projectList[0].name : 'The Best Project Ever' ;
		return (
			<div className="project-header">
				<a className="project-header__name"> {projectName} </a>
			</div>
			);
	}
}

export default ProjectHeader;