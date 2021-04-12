import React, { Component } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { videos: [], selectedVideo: null };
		this.handleTermSubmit = this.handleTermSubmit.bind(this);
		this.handleVideoSelect = this.handleVideoSelect.bind(this);
	}

	componentDidMount() {
		this.handleTermSubmit('video');
	}

	async handleTermSubmit(term) {
		const res = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		this.setState({
			videos: res.data.items,
			selectedVideo: res.data.items[0]
		});
	}

	handleVideoSelect(video) {
		this.setState({ selectedVideo: video });
	}

	render() {
		const { videos, selectedVideo } = this.state;
		return (
			<div className="ui container">
				<SearchBar handleFormSubmit={this.handleTermSubmit} />
				<div className="ui stackable grid">
					<div className="ui row">
						<div className="sixteen wide tablet eleven wide large screen column">
							<VideoDetail video={selectedVideo} />
						</div>
						<div className="sixteen wide tablet five wide large screen column">
							<VideoList
								videos={videos}
								handleVideoSelect={this.handleVideoSelect}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
