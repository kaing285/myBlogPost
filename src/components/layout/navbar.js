import React from 'react'
import {Link} from 'react-router-dom'
import SignInLink from'./signIn'
import SignOutLink from'./signOut'


const Navbar = () => {
	return(
		<nav className = "nav.nav-wrapper.grey.darken-3">
			<div className="container">
				<Link to='/' className="brand-logo left">Hi, I'm Thao</Link>
				<SignInLink />
				<SignOutLink/>
				
			</div>
		</nav>
	)
}

export default Navbar
