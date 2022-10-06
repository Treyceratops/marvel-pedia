import React from 'react';
import md5 from 'js-md5';
import { useEffect, useState } from 'react';
import CharacterSearchForm from './CharacterSearchForm';
import CharacterSearchResults from './CharacterSearchResults';

function CharacterSearch({ setFavorites, favorites }) {
	const [characters, setCharacters] = useState([]);
	const [searchString, setSearchString] = useState(
		'Spider-Man (Miles Morales)'
	);

	const searchOptions = {
		publicKey: process.env.REACT_APP_PUBLIC_KEY,
		privateKey: process.env.REACT_APP_PRIVATE_KEY,
		limit: 10,
		api: 'https://gateway.marvel.com/v1/public',
		endpoint: '/characters',
	};

	useEffect(() => {
		getCharacters(searchString);
	}, []);

	function getCharacters(searchString) {
		const ts = Number(new Date());
		const hash = md5.create();
		hash.update(
			ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY
		);

		const url = `${searchOptions.api}${searchOptions.endpoint}?nameStartsWith=${searchString}&ts=${ts}&orderBy=name&limit=${searchOptions.limit}&apikey=${searchOptions.publicKey}&hash=${hash.hex()}`;


		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCharacters(res.data.results);
				setSearchString('');
			})
			.catch(console.error);
	}

	return (
		<div>
			<h1>Character Search</h1>
			<main>
				<CharacterSearchForm
				setSearchString={setSearchString}
                getCharacters={getCharacters}
                searchString={searchString}
				/>
                <CharacterSearchResults characters={characters} setFavorites={setFavorites} favorites={favorites} />
			</main>
		</div>
	);
}

export default CharacterSearch;
