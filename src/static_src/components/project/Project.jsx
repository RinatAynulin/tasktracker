import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { selectProject } from './../../actions/projects';
// import User from './User';


class Project extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        author: PropTypes.number,
        name: PropTypes.string,
        created_at: PropTypes.string,
        selectProject: PropTypes.func,
    }

    static defaultProps = {
        author: null,
        name: '',
        created_at: '',
    }

    onClick = (e) => {
        this.props.selectProject(this.props.id);
    }

    render() {
        let link = `/taskList/${this.props.id}`;
        return (
            <div className="project">
                <div className="project__content">
                    <Link to={link} onClick={ this.onClick }>{ this.props.name }</Link>
                </div>
            </div>
        );
    }
}


const mapStateToProps = ({ projects }, ownProps) => {
    return {
        ...projects.projects[ownProps.id],
    };
};

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({selectProject}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Project);