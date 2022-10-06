import React from 'react';

function ComicSearchResults({ comics, setFavorites, favorites }) {
	if (!comics.length) {
		return (
			<h2>
				No Comics Found! <br /> Try typing just the first few letters of the
				title.
			</h2>
		);
	}

	return (
		<div className='char-container'>
			{comics.map((comic) => (
				<div className='individual-characters' key={comic.id}>
					<h1 className='character-text'>{comic.title}</h1>
					<img src={comic.thumbnail.path + '.jpg'} alt='comic-image' />
					<br />
					<a href={`${comic.urls[0].url}`} target='_blank'>
						more info
					</a>
					<br />
					<button
						className='favorite-button'
						onClick={() => setFavorites([...favorites, comic])}>
						❤️
					</button>
				</div>
			))}
		</div>
	);
}

export default ComicSearchResults;
