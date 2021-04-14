import React, { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

function App() {
	const [ videos, setVideos ] = useState([]);
	const [ selectedVideo, setSelectedVideo ] = useState(null);

	useEffect(() => {
		handleTermSubmit('eminem');
	}, []);

	const handleTermSubmit = async (term) => {
		const res = await youtube.get('/search', {
			params: {
				q: term
			}
		});
		setVideos(res.data.items);
		setSelectedVideo(res.data.items[0]);
	};

	const handleVideoSelect = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className="ui container">
			<SearchBar handleFormSubmit={handleTermSubmit} />
			<div className="ui stackable grid">
				<div className="ui row">
					<div className="sixteen wide tablet eleven wide large screen column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="sixteen wide tablet five wide large screen column">
						<VideoList
							videos={videos}
							handleVideoSelect={handleVideoSelect}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
