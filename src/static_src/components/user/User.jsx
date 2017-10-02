import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import './../../styles.css';

class User extends React.Component {
    static propTypes = {
        id: PropTypes.number,
        username: PropTypes.string,
        email: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        avatar: PropTypes.string
    }

    static defaultProps = {
        id: 0,
        username: '',
        email: '',
        first_name: '',
        last_name: '',
        avatar: ''
    }

    render() {
        return (
            <div className="user">
                <div className="user__name"> { this.props.first_name + this.props.last_name } </div>
                <div className="user__avatar"> <img src={this.props.avatar}/> </div>
            </div>
        );
    }
}


const mapStateToProps = ({ users }, ownProps) => {
    return {
        ...users.users[ownProps.id],
    };
};

const mapDispatchToProps = (dispatch) => ({
    // bindActionCreators({selectProject}, dispatch)
}
);

export default connect(mapStateToProps, mapDispatchToProps)(User);