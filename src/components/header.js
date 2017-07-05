import React, {Component} from 'react';
import {Link} from 'react-router';
import MobileNav from './mobileNav';
import Top from './toTheTop';

export default class Header extends Component{
	constructor(){
		super();
		this.state={
			visible:false
		}

		this.toggleMenu=this.toggleMenu.bind(this);
	}

	toggleMenu(){
		this.setState({visible: !this.state.visible})
	}
	render(){
		return(
			<nav className="nav-bar">

			<Top/>

			<div className="header">
				<h1>Andrew and Krystaal's Wedding</h1>
			</div>
				<div className="nav-items">
					<div className="menu-btn">
						<h2 onClick={this.toggleMenu}>- Menu -</h2>
						{
							this.state.visible
							?<MobileNav/>
							:null
						}

					</div>
					<mobileNav />
					<div className="navMenu" >
						<li className="nav-divider">
							-
						</li>
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
						<li className="nav-divider">
							-
						</li>
				  </div>
				</div>
			</nav>

		)
	}
}
