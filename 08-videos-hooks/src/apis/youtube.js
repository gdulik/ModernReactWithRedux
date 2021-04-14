import axios from 'axios';

const API_KEY = 'AIzaSyBmNUM5gFL3vy1xVW5oMB345uNDmh7EqIw';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: API_KEY
	}
});
