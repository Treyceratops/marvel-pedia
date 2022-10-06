import React from 'react';

function CharacterSearchResults({ characters, setFavorites, favorites }) {
	if (!characters.length) {
		return (
			<h2>
				No Characters Found! <br /> Try typing just the first few letters of
				their name.
			</h2>
		);
	}

	return (
		<div className='char-container'>
			{characters.map((character) => (
				<div className='individual-characters' key={character.id}>
					<h1 className='character-text'>{character.name}</h1>
					<img src={character.thumbnail.path + '.jpg'} alt='character-image' />
					<br />
					<a href={`${character.urls[0].url}`} target='_blank'>
						more info
					</a>
					<br />
					<button
						className='favorite-button'
						onClick={() => setFavorites([...favorites, character])}>
						❤️
					</button>
				</div>
			))}
		</div>
	);
}

export default CharacterSearchResults;
