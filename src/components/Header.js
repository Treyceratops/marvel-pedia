import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Header(props) {
    return (
			<div>
				<nav className='header'>
					<Link to='/'>
						<button className='nav-buttons'>Home</button>
					</Link>
					<Link to='/characterlist'>
						<button className='nav-buttons'>Character List</button>
					</Link>
					<Link to='/charactersearch'>
						<button className='nav-buttons'>Character Search</button>
					</Link>
					{/* <Link to='/comics'>Comics</Link>
					<Link to='/stories'>Stories</Link> */}
					<Link to='/favorites'>
						<button className='nav-buttons'>Favorites</button>
					</Link>
				</nav>
			</div>
		);
}

export default Header;