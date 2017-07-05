import React, {Component} from 'react';
import {Link} from 'react-router'

export default class MobileNav extends React.Component{
	render(){
		return(
			<div className="navMenuMobile">
				<li className="nav-item">
					<Link to="/"  id="underline">About Us</Link>
				</li>
				<li className="nav-item">
					<Link to="/wedding-info"  id="underline">Wedding Info</Link>
				</li>
				<li className="nav-item">
					<Link to="/blog"  id="underline">Blog</Link>
				</li>
				<li className="nav-item">
					<Link to="/get-in-touch"  id="underline">RSVP</Link>
				</li>
			</div>
		)
	}
}
