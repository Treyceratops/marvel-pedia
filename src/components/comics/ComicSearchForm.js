import React from 'react';
import { SearchIcon } from '../SearchIcon';

function ComicSearchForm({ getComics, setSearchString, searchString }) {

    	function handleChange(event) {
				setSearchString(event.target.value);
			};

			function handleSubmit(event) {
				event.preventDefault();
				getComics(searchString);
			};

    return (
			<div>
				<form onSubmit={handleSubmit}>
					<input
						placeholder='comic title...'
						type='text'
						name='searchString'
						required
						autoFocus
						autoComplete='off'
						onChange={handleChange}
						value={searchString}
					/>
					<button className='submit-button' type='submit'>
						<SearchIcon height='1rem' width='1rem' />
					</button>
				</form>
			</div>
		);
}

export default ComicSearchForm;