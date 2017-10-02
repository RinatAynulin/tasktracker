import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, push } from 'redux';
import { connect } from 'react-redux';
import { loadProjects } from './../../actions/projects';
import Project from './Project';
import Pagination from './../pagination/Pagination';
import './../../styles.css';

class ProjectList extends React.Component {

	static propTypes = {
		isLoading: PropTypes.bool,
		projectList: PropTypes.arrayOf(PropTypes.number),
		size: PropTypes.number,
		previous: PropTypes.string,
		next: PropTypes.string,
		loadProjects: PropTypes.func.isRequired,
	};

	static defaultProps = {
		isLoading: false,
		projectList: [],
	};

	componentDidMount() {
		this.props.loadProjects(1);
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
		const pagination = <div className="pagination"></div>;
		if (this.props.previous || this.props.next) {
			const pagination = (
				<div className="pagination">
					<Pagination size={ this.props.size } previous={ this.props.previous } next={ this.props.next }/>
				</div>);
		}
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
        size: projects.size,
        previous: projects.previous,
        next: projects.next,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadProjects }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);