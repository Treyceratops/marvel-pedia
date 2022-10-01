import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Header(props) {
    return (
			<div>
				<nav>
					<Link to='/'>Home</Link>
					<Link to='/characters'>Characters</Link>
					<Link to='/comics'>Comics</Link>
					<Link to='/stories'>Stories</Link>
				</nav>
			</div>
		);
}

export default Header;