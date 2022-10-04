import React from 'react';
import Favorites from './Favorites';

function SearchResults({ characters, setFavorites, favorites }) {
	if (!characters.length) {
		return <h2>No Characters Found! Exact spelling counts!</h2>;
	}

	return (
		<div>
			{characters.map((character) => (
				<div key={character.id}>
					<h4>{character.name}</h4>
					<img src={character.thumbnail.path + '.jpg'} alt='character-image' />
                    <br />
					<a href={`${character.urls[0].url}`} target='_blank'>
						more info
					</a>
                    <br />
                    <button onClick={() => setFavorites([...favorites, character]) }>Favorite</button>
				</div>
			))}
		</div>
	);
}

export default SearchResults;