import React from 'react';
import { SearchIcon } from './SearchIcon';

function SearchForm( handleSubmit, handleChange, searchString ) {
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