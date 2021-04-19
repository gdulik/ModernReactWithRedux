import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions';

function StreamList({ streams, fetchStreams }) {
	useEffect(() => {
		fetchStreams();
	}, []);
	const renderList = () => {
		return streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};
	return (
		<div>
			<h2>Streams</h2>
			<div className="ui celled list">{renderList()}</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	streams: Object.values(state.streams)
});

const mapDispatchToProps = { fetchStreams };

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
