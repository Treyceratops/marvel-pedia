import md5 from 'js-md5';
import React, { useState, useEffect } from 'react';
import ComicSearchForm from './ComicSearchForm';
import ComicSearchResults from './ComicSearchResults';

function ComicSearch({ setFavorites, favorites }) {
	const [comics, setComics] = useState([]);
	const [searchString, setSearchString] = useState('x');

	const searchOptions = {
		publicKey: process.env.REACT_APP_PUBLIC_KEY,
		privateKey: process.env.REACT_APP_PRIVATE_KEY,
		limit: 10,
		api: 'https://gateway.marvel.com:443/v1/public',
		endpoint: '/comics',
	};

	useEffect(() => {
		getComics(searchString);
	}, []);

	function getComics(searchString) {
		const ts = Number(new Date());
		const hash = md5.create();
		hash.update(
			ts + process.env.REACT_APP_PRIVATE_KEY + process.env.REACT_APP_PUBLIC_KEY
		);

		const url = `${searchOptions.api}${
			searchOptions.endpoint
		}?titleStartsWith=${searchString}&ts=${ts}&limit=${
			searchOptions.limit
		}&apikey=${searchOptions.publicKey}&hash=${hash.hex()}`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setComics(res.data.results);
				setSearchString('');
			})
			.catch(console.error);
	}

	return (
		<div>
			<h1>Comic Search</h1>
			<main>
				<ComicSearchForm
					setSearchString={setSearchString}
					getComics={getComics}
					searchString={searchString}
				/>
				<ComicSearchResults
					comics={comics}
					setFavorites={setFavorites}
					favorites={favorites}
				/>
			</main>
		</div>
	);
}

export default ComicSearch;