import React from 'react';

function Favorites({ favorites, setFavorites }) {
	function handleDelete(id) {
		const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
		setFavorites(updatedFavorites);
	}

	if (!favorites.length) {
		return (
			<div>
				<h1 className='page-title'>Favorites</h1>
				<h2>You have yet to favorite anything!</h2>
			</div>
		);
	}
	return (
		<div>
			<h1 className='page-title'>Favorites</h1>
			<div className='char-container'>
				{favorites.map((favorite) => (
					<div className='individual-characters' key={favorite.id}>
						<h4 className='character-text'>{favorite.name}</h4>
						<h4 className='character-text'>{favorite.title}</h4>
						<img src={favorite.thumbnail.path + '.jpg'} alt='favorite-image' />
						<br />
						<a href={`${favorite.urls[0].url}`} target='_blank'>
							more info
						</a>
						<br />
						<button
							className='favorite-button'
							onClick={() => handleDelete(favorite.id)}>
							❌
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Favorites;
