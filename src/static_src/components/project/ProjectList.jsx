import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, push } from 'redux';
import { connect } from 'react-redux';
import { loadProjects } from './../../actions/projects';
import Project from './Project';
import { PAGE_SIZE } from './../../constants/apiUrls';
import './../../styles.css';

class ProjectList extends React.Component {

    static propTypes = {
        isLoading: PropTypes.bool,
        projectList: PropTypes.arrayOf(PropTypes.number),
        loadProjects: PropTypes.func.isRequired,
        server: PropTypes.bool,
        addToPromises: PropTypes.func,
    };

    static defaultProps = {
        isLoading: false,
        projectList: [],
        server: false,
        addToPromises: () => {},
    };


    onScroll = (e) => {
        if (this.props.isLoading) {
            return;
        }
        let loadNext = e.target.scrollTop + e.target.offsetHeight == e.target.scrollHeight;
        if (loadNext) {
            let page = Math.ceil(this.props.projectList.length / PAGE_SIZE.project) + 1;
            this.props.loadProjects(page, true);
        }
    }

    onClick = (e) => {
        if (this.props.isLoading) {
            return;
        }
        let page = Math.ceil(this.props.projectList.length / PAGE_SIZE.project) + 1;
        this.props.loadProjects(page, true);
    }

    constructor(props) {
        super(props);
        if (SERVER) {
            this.props.addToPromises(this.props.loadProjects(1, false));
        }
    }

    componentDidMount() {
        if (!this.props.isServerRendering) {
            this.props.loadProjects(1, false);
        }
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
                <div className="project-list" onScroll={this.onScroll}>
                        {projects}
                        <button onClick={this.onClick}>Load more</button>
                </div>
            );
    }
}

const mapStateToProps = ({ SSR, projects }) => {
    return {
        isLoading: projects.isLoading,
        projectList: projects.projectList,
        isServerRendering: SSR.serverRendering,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ loadProjects }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);