import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Header(props) {
    return (
			<div>
				<nav>
					<Link to='/'>
						<button>Home</button>
					</Link>
					<Link to='/characterlist'>
						<button>Character List</button>
					</Link>
					<Link to='/charactersearch'>
						<button>Character Search</button>
					</Link>
					{/* <Link to='/comics'>Comics</Link>
					<Link to='/stories'>Stories</Link> */}
					<Link to='/favorites'>
						<button>Favorites</button>
					</Link>
				</nav>
			</div>
		);
}

export default Header;