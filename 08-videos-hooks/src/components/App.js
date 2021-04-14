import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVideos from '../hooks/useVideos';

function App() {
	const [ videos, search ] = useVideos('wellerman');
	const [ selectedVideo, setSelectedVideo ] = useState(null);

	useEffect(
		() => {
			setSelectedVideo(videos[0]);
		},
		[ videos ]
	);

	return (
		<div className="ui container">
			<SearchBar handleFormSubmit={search} />
			<div className="ui stackable grid">
				<div className="ui row">
					<div className="sixteen wide tablet eleven wide large screen column">
						<VideoDetail video={selectedVideo} />
					</div>
					<div className="sixteen wide tablet five wide large screen column">
						<VideoList
							videos={videos}
							handleVideoSelect={setSelectedVideo}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
