import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import apiUrls from './../../constants/apiUrls';
import { logout } from './../../actions/auth';

class Logout extends React.Component {
    static propTypes = {
        redirectToLogin: PropTypes.func,
        logout: PropTypes.func,
    };

    componentWillMount() {
        if (!this.props.isServerRendering) {
            this.props.logout().then(() =>
                this.props.redirectToLogin());
        }
    }

    render() {
        return null;
    }
}

const mapStateToProps = ({ SSR }) => {return {isServerRendering: SSR.serverRendering,}};

const mapDispatchToProps = (dispatch) => {
    return ({
        redirectToLogin: () => dispatch(push('/login')), 
        logout: () => dispatch(logout())
    });
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);