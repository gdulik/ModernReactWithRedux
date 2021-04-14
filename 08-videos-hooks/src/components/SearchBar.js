import React, { useState } from 'react';

function SearchBar({ handleFormSubmit }) {
	const [ term, setTerm ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		handleFormSubmit(term);
		setTerm('');
	};

	return (
		<div className="search-bar ui segment">
			<form className="ui form" onSubmit={handleSubmit}>
				<div className="field">
					<label htmlFor="search">Video Search</label>
					<input
						id="search"
						type="text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</form>
		</div>
	);
}

export default SearchBar;
