import React from 'react';
import { SearchIcon } from './SearchIcon';

function SearchForm({ getCharacters, setSearchString, searchString }) {
    
	function handleChange(event) {
		setSearchString(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getCharacters(searchString);
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className='form-horizontal'>
				<input
					placeholder='hero/villain name...'
					type='text'
					name='searchString'
					required
                    autoFocus
					onChange={handleChange}
					value={searchString}
				/>
				<button type='submit'>
					<SearchIcon height='1rem' width='1rem' />
				</button>
			</form>
		</div>
	);
}

export default SearchForm;