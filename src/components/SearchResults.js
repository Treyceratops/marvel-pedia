import React from 'react';

function SearchResults(characters) {
	if (!characters.length) {
		return <h2>No Characters Found!</h2>;
	}

	return (
		<div>
			{characters.map((character) => (
				<div key={character.id}>
					{/* <img src={} alt={character.title} /> */}
                    <h4>{character.name}</h4>
				</div>
			))}
		</div>
	);
}

export default SearchResults;