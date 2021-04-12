import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../api/unsplash';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { images: [] };
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

	async handleSearchSubmit(term) {
		const res = await unsplash.get('/search/photos', {
			params: {
				query: term
			}
		});
		this.setState({
			images: res.data.results
		});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.handleSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
