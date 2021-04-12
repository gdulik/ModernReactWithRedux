import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID -ZHxLU4rwRs3EGAjR-69Qk-yAqlnwInjI6pCmbDCNEw'
	}
});
