import React from 'react'
import {NavLink} from 'react-router-dom'

const SignOutLink = () => {
	return(
		<ul className="right">
			<li><NavLink to='/signup'>Signup</NavLink></li>
			<li><NavLink to='signin/login'>Login</NavLink></li>
			<li><NavLink to='/weather'>Weather</NavLink></li>
			
		</ul>
	)
}
			
export default SignOutLink
