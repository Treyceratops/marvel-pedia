import React from 'react';

function Favorites({ favorites, setFavorites }) {
	if (!favorites.length) {
		return (
			<div>
				<h1>Favorites</h1>
				<h2>You have yet to favorite anything!</h2>
			</div>
		);
	}
    return (
			<div>
				<h1>Favorites</h1>
				<div className='char-container'>
					{favorites.map((favorite) => (
						<div className='individual-characters' key={favorite.id}>
							<h4 className='character-text'>{favorite.name}</h4>
							<h4 className='character-text'>{favorite.title}</h4>
							<img
								src={favorite.thumbnail.path + '.jpg'}
								alt='favorite-image'
							/>
							<br />
							<a href={`${favorite.urls[0].url}`} target='_blank'>
								more info
							</a>
						</div>
					))}
				</div>
				{/* <button onClick={() => setFavorites([])}>x</button> */}
			</div>
		);
}

export default Favorites;