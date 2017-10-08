import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    (
      <Component {...props}/>
    )
    
  )}/>
)

const mapStateToProps = ({ auth }) => {
        return {
            // isAuthenticated: auth.authentication.isAuthenticated,
        };
    // }
};

const mapDispatchToProps = (dispatch) => {return {}};


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
