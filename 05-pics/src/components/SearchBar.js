import React, { useState } from 'react';

function SearchBar({ onSubmit }) {
	const [ term, setTerm ] = useState('');
	return (
		<div className="ui segment">
			<form
				className="ui form"
				onSubmit={(e) => {
					e.preventDefault();
					onSubmit(term);
					setTerm('');
				}}
			>
				<label htmlFor="search">Image Search</label>
				<input
					id="search"
					className="field"
					placeholder="Search..."
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
			</form>
		</div>
	);
}

export default SearchBar;
