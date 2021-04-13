import React, { useState, useEffect } from 'react';
import wikipedia from '../apis/wikipedia';

function Search() {
	const [ term, setTerm ] = useState('programming');
	const [ debouncedTerm, setDebouncedTerm ] = useState(term);
	const [ results, setResults ] = useState([]);

	useEffect(
		() => {
			const timerId = setTimeout(() => {
				setDebouncedTerm(term);
			}, 500);
			return () => {
				clearTimeout(timerId);
			};
		},
		[ term ]
	);

	useEffect(
		() => {
			const search = async () => {
				const { data } = await wikipedia.get('', {
					params: {
						srsearch: debouncedTerm
					}
				});
				setResults(data.query.search);
			};
			if (debouncedTerm) {
				search();
			}
		},
		[ debouncedTerm ]
	);

	const renderedResults = results.map((result) => (
		<div key={result.pageid} className="item">
			<div className="right floated content">
				<a
					className="ui button"
					href={`https://en.wikipedia.org?curid=${result.pageid}`}
				>
					Go
				</a>
			</div>
			<div className="content">
				<div className="header">{result.title}</div>
				<span dangerouslySetInnerHTML={{ __html: result.snippet }} />
			</div>
		</div>
	));

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label htmlFor="search">Enter Search Term</label>
					<input
						id="search"
						type="text"
						className="input"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
}

export default Search;
