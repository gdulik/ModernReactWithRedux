import _ from 'lodash';
import {
	CREATE_STREAM,
	FETCH_STREAM,
	FETCH_STREAMS,
	DELETE_STREAM,
	EDIT_STREAM
} from '../actions/types';

const streamReducer = (state = {}, action) => {
	switch (action.type) {
		case CREATE_STREAM:
		case FETCH_STREAM:
		case EDIT_STREAM:
			return { ...state, [action.payload.id]: action.payload };
		case FETCH_STREAMS:
			return { ..._.mapKeys(action.payload, 'id') };
		case DELETE_STREAM:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

export default streamReducer;
