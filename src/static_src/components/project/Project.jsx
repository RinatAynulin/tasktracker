import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// import User from './User';


class Task extends React.Component {
    static propTypes = {
        id: PropTypes.number.isRequired,
        author: PropTypes.number,
        name: PropTypes.string,
        created_at: PropTypes.string,
    }

    static defaultProps = {
        author: null,
        name: '',
        created_at: '',
    }

    render() {
        return (
            <div className="project">
                <div className="project__content">{ this.props.name }</div>
            </div>
        );
    }
}


const mapStateToProps = ({ projects }, ownProps) => {
    return {
        ...projects.projects[ownProps.id],
    };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Task);