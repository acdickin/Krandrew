import React, {Component} from 'react';
import {Link} from 'react-router'


export default class Header extends Component{
	toggleMenu(){

	}
	render(){
		return(
			<nav className="nav-bar">
				<div className="nav-items blk">
					<h1 className="header-desktop">Andrew and Krystaal's Wedding Website</h1>
					<h1 className="header-mobile">Andrew and Krystaal's Wedding</h1>
					<hr/>
					<div className="menu-btn" onClick={this.toggleMenu}>
						<h2>- Menu -</h2>
					</div>

					<div className="navMenu" >
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
							<Link to="/blog"  id="underline">Blog</Link>
						</li>
						<li className="nav-divider">
								-
							</li>
						<li className="nav-item">
							<Link to="/get-in-touch"  id="underline">RSVP</Link>
						</li>
				  </div>
				</div>
			</nav>

		)
	}
}
