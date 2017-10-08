import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Project from './../project/Project';
import './../../styles.css';

class ProjectHeader extends React.Component {
    static propTypes = {
        project: PropTypes.shape(Project.PropTypes),
    };

    static defaultProps = {
        project: {},
    };

    render() {
        let projectName = '';
        if (this.props.project) {
            projectName = this.props.project.name;
        }
        return (
            <div className="project-header">
                <a className="project-header__name"> {projectName} </a>
            </div>
            );
    }
}

const mapStateToProps = ({ tasks, projects }) => {
    return {
        project: projects.projects[projects.selectedProject],
    }
}

const mapDispatchToProps = (dispatch) => {return {};}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectHeader);
