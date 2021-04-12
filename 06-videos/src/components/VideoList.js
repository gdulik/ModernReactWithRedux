import React from 'react';
import VideoItem from './VideoItem';

function VideoList({ videos, handleVideoSelect }) {
	const renderedList = videos.map((video) => (
		<VideoItem
			key={video.id.videoId}
			video={video}
			handleVideoSelect={handleVideoSelect}
		/>
	));
	return <div className="ui relaxed divided list">{renderedList}</div>;
}

export default VideoList;
