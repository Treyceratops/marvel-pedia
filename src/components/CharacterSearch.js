import React from 'react';
import md5 from 'js-md5';
import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function CharacterSearch({ setFavorites, favorites }) {
	const [characters, setCharacters] = useState([]);
	const [searchString, setSearchString] = useState(
		'Spider-Man (Miles Morales)'
	);
	const [lastSearch, setLastSearch] = useState('');

	const searchOptions = {
		publicKey: process.env.REACT_APP_PUBLIC_KEY,
		privateKey: process.env.REACT_APP_PRIVATE_KEY,
		limit: 5,
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
                console.log('responseeeee', res.data.results)
				setCharacters(res.data.results);
                console.log('characterssssssssss', characters);
				setLastSearch(searchString);
				setSearchString('');
			})
			// set error state
			.catch(console.error);
	}

	return (
		<div>
			<h1>Character Search</h1>
			<nav>
				<SearchForm
				setSearchString={setSearchString}
                getCharacters={getCharacters}
                searchString={searchString}
				/>
                <SearchResults characters={characters} setFavorites={setFavorites} favorites={favorites} />
			</nav>
		</div>
	);
}

export default CharacterSearch;
