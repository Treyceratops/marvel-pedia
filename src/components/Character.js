import md5 from 'js-md5';
import React, { useState, useEffect } from 'react';

function Character(props) {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		const ts = Number(new Date());
		const hash = md5.create();
		hash.update(
			ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY
		);
		console.log(ts, hash);
		fetch(
			`https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=10&apikey=${
				process.env.REACT_APP_PUBLIC_KEY
			}&hash=${hash.hex()}`
		)
			.then((res) => res.json())
			.then((data) => {
				setCharacters(data.data.results);
                console.log('charactersssss', data.data.results);
			})
			// set error state
			.catch(() => console.log('error'));
	}, []);

	return (
		<div>
			<main>
				{characters.map((character) => {
					return (
						<div>
							<h1>{character.name}</h1>
							<a
								href={`${character.urls[0].url}`}
								target='_blank'
							>more info</a>
							<img src={character.thumbnail.path + '.jpg'} alt='character-image' />
						</div>
					);
				})}
			</main>
		</div>
	);
}

export default Character;
