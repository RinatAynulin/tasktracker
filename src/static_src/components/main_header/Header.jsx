import React from 'react';
import PropTypes from 'prop-types';

import Project from './../project/Project';

import './../../styles.css';

class Header extends React.Component {
	static propTypes = {
		projectList: PropTypes.arrayOf(PropTypes.shape(Project.PropTypes)),
		currentUser: PropTypes.shape({
				id: PropTypes.number,
				first_name: PropTypes.string,
				last_name: PropTypes.string,
				avatar: PropTypes.string,
				email: PropTypes.string,
				username: PropTypes.string,
			}),
	};

	static defaultProps = {
		projectList: [],
		currentUser: {}
	};

	render() {
		const projectName = this.props.projectList.length > 0 ? this.props.projectList[0].name : 'The Best Project Ever' ;
		const projects = this.props.projectList.map(
				(project) => <li key={project.id}><a href="#dummy">{project.name}</a></li>
			);
		return (
			<div className="header">
				<div className="header__element">
					<a href="/"> TSKTRCKR </a>
				</div>
				<div className="header__element">
					<ul>
						{projects}
					</ul>
				</div>
				<div className="header__auth">
					<p> {this.props.currentUser.first_name + ' ' + this.props.currentUser.last_name} </p>
				</div>
			</div>
			);
	}
}

export default Header;