import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators, push } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Project from './../project/Project';

import './../../styles.css';

class Header extends React.Component {
	static propTypes = {
		currentUser: PropTypes.shape({
				id: PropTypes.number,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				avatar: PropTypes.string,
				email: PropTypes.string,
				username: PropTypes.string,
			}),
	};

	render() {
		console.log(this.props.currentUser);
		const currentUser = (this.props.currentUser.first_name) ? <p> {this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name} </p> : <p>Anonymous</p>;
		return (
			<div className="header">
				<div className="header__element">
					<a href="/"> TSKTRCKR </a>
				</div>
				<div className="header__element">
						<Link to="/projects">All projects</Link>
				</div>
				<div className="header__element-right">
						<Link to="/login">Log in</Link>
				</div>
				<div className="header__element-right">
						<Link to="/logout"> Logout </Link>
				</div>
				<div className="header__element-right">
					{currentUser}
				</div>
			</div>
			);
	}
}

const mapStateToProps = ({ auth }) => {
    return {
        currentUser: auth.user.user,
    }
}

const mapDispatchToProps = () => {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);