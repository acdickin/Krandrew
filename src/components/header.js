import React, {Component} from 'react';
import {Link} from 'react-router'


export default class Header extends Component{
	render(){
		return(
			<nav className="navbar navbar-light">
				<li className="nav-item">
					<Link to="/">About Us</Link>
				</li>
				<li className="nav-item">
					<Link to="/wedding-info">Wedding Info</Link>
				</li>
				<li className="nav-item">
					<Link to="/get-in-touch"> Get In Touch</Link>
				</li>
				<li className="nav-item">
					<Link to="/blog">Blog</Link>
				</li>
				<li className="nav-item">
					<Link to="/get-in-touch">RSVP</Link>
				</li>
			</nav>

		)
	}
}