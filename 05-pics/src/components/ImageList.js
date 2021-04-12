import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

function ImageList({ images }) {
	return (
		<div className="image-list">
			{images.map((image) => <ImageCard key={image.id} image={image} />)}
		</div>
	);
}

export default ImageList;
