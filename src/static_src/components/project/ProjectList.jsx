import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, push } from 'redux';
import { connect } from 'react-redux';
import { loadProjects } from './../../actions/projects';
import Project from './Project';
import './../../styles.css';

class ProjectList extends React.Component {

	static propTypes = {
		isLoading: PropTypes.bool,
		projectList: PropTypes.arrayOf(PropTypes.number),
		loadProjects: PropTypes.func.isRequired,
	};

	static defaultProps = {
		isLoading: false,
		projectList: [],
	};

	componentDidMount() {
		this.props.loadProjects();
	}

	render() {
		if (this.props.isLoading) {
			return <div className="project-list">Loading...</div>;
		}
		const projects = this.props.projectList.map(
			(projectId) => (
				<Project key={projectId} id={projectId}/>
				)
			);
		return (
				<div className="project-list">
						{projects}
				</div>
			);
	}
}

const mapStateToProps = ({ projects }) => {
    return {
        isLoading: projects.isLoading,
        projectList: projects.projectList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadProjects }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);