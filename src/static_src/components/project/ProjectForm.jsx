import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import apiUrls from './../../constants/apiUrls';
import { addProject } from './../../actions/projects';

class ProjectForm extends React.Component {
    static propTypes = {
        isLoading: PropTypes.bool,
        addProject: PropTypes.func,
    };

    state = {
        name: '',
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClick = (e) => {
        e.preventDefault();
        if (this.props.isLoading) {
            return;
        }

        const body = JSON.stringify(this.state);

        this.props.addProject(body);
    }

    render() {
        if (this.props.isLoading) {
            return (<p> Loading</p>);
        }

        return (
            <div className="project-form">
                <form>
                    <div className="project-field-wrapper">
                        <input onChange={ this.onChange } value={ this.state.name } className="project-form-field" type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="project-field-wrapper">
                        <button onClick={ this.onClick }>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = ({ projects }) => {
        return {
            isLoading: projects.isLoading,
        };
    // }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addProject }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);