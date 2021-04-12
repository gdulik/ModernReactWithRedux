import React from 'react';
import './VideoItem.css';

function VideoItem({ video, handleVideoSelect }) {
	return (
		<div
			className="item video-item"
			onClick={() => handleVideoSelect(video)}
		>
			<img
				className="ui image"
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
}

export default VideoItem;
