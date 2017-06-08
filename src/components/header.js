import React, {Component} from 'react';
import {Link} from 'react-router'


export default class Header extends Component{
	render(){
		return(

			<nav className="nav-bar">
			<h1  className="header-mobile blk">Krandrew Wedding</h1>
				<div className="nav-items blk">
					<h1 className="header-desktop"> Andrew and Krystaal's Wedding Website</h1>
					<li className="nav-item">
						<Link to="/"  id="underline">About Us</Link>
					</li>
						<li className="nav-divider">
							-
						</li>
					<li className="nav-item">
						<Link to="/wedding-info"  id="underline">Wedding Info</Link>
					</li>
					<li className="nav-divider">
							-
						</li>
					<li className="nav-item">
						<Link to="/get-in-touch" id="underline"> Get In Touch</Link>
					</li>
					<li className="nav-divider">
							-
						</li>
					<li className="nav-item">
						<Link to="/blog"  id="underline">Blog</Link>
					</li>
					<li className="nav-divider">
							-
						</li>
					<li className="nav-item">
						<Link to="/get-in-touch"  id="underline">RSVP</Link>
					</li>
				</div>
			</nav>

		)
	}
}
