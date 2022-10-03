import React from 'react';
import md5 from 'js-md5';
import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

function CharacterSearch(props) {
	const [characters, setCharacters] = useState([]);
	const [searchString, setSearchString] = useState('1011334');
	const [lastSearch, setLastSearch] = useState('');

	const searchOptions = {
		publicKey: process.env.REACT_APP_PUBLIC_KEY,
		privateKey: process.env.REACT_APP_PRIVATE_KEY,
		limit: 20,
		api: 'https://gateway.marvel.com/v1/public',
		endpoint: '/characters',
	};

	useEffect(() => {
		getCharacters(searchString);

		// const ts = Number(new Date());
		// const hash = md5.create();
		// hash.update(
		// 	ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY
		// );
		// console.log(ts, hash);
		// fetch(
		// 	`https://gateway.marvel.com/v1/public/characters?ts=${ts}&orderBy=name&limit=10&apikey=${
		// 		process.env.REACT_APP_PUBLIC_KEY
		// 	}&hash=${hash.hex()}`
		// )
		// 	.then((res) => res.json())
		// 	.then((data) => {
		// 		setCharacters(data.data.results);
		// 		console.log('charactersssss', data.data.results);
		// 	})
		// 	// set error state
		// 	.catch(console.error);
	}, []);

	function getCharacters(searchString) {
		const ts = Number(new Date());
		const hash = md5.create();
		hash.update(
			ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY
		);

		const url = `${searchOptions.api}${searchOptions.endpoint}/${searchString}?ts=${ts}&orderBy=name&limit=${searchOptions.limit}&apikey=${searchOptions.publicKey}&hash=${hash.hex()}`;


		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setCharacters(res.data.results);
				setLastSearch(searchString);
				setSearchString('');
				console.log('character searchhhhhhhhh', res.data.results[0].name);
			})
			// set error state
			.catch(console.error);
	}

	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getCharacters(searchString);
	}

	return (
		<div>
			<h1>Character Search</h1>
			<nav>
				<SearchForm
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				searchString={searchString}
				/>
                <SearchResults characters={characters} />
			</nav>
		</div>
	);
}

export default CharacterSearch;
