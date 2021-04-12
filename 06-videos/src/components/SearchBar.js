import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term: '' };
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleInputChange(e) {
		this.setState({ term: e.target.value });
	}

	handleFormSubmit(e) {
		e.preventDefault();
		this.props.handleFormSubmit(this.state.term);
		this.setState({ term: '' });
	}

	render() {
		const { term } = this.state;
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.handleFormSubmit}>
					<div className="field">
						<label htmlFor="search">Video Search</label>
						<input
							id="search"
							type="text"
							value={term}
							onChange={this.handleInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
