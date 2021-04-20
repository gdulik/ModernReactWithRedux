import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

function StreamEdit({ match, stream, fetchStream, editStream }) {
	useEffect(
		() => {
			fetchStream(match.params.id);
		},
		[ fetchStream, match.params.id ]
	);
	if (!stream) {
		return <div>Loading...</div>;
	}
	return <div>{stream.title}</div>;
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

const mapDispatchToProps = { fetchStream, editStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
