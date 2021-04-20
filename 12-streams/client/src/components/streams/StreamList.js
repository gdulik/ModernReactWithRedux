import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

function StreamList({ isSignedIn, currentUserId, streams, fetchStreams }) {
	useEffect(() => {
		fetchStreams();
		// eslint-disable-next-line
	}, []);

	const renderAdmin = (stream) => {
		if (stream.userId === currentUserId) {
			return (
				<div className="right floated content">
					<Link
						to={`/streams/edit/${stream.id}`}
						className="ui button primary"
					>
						Edit
					</Link>
					<Link
						to={`/streams/delete/${stream.id}`}
						className="ui button negative"
					>
						Delete
					</Link>
				</div>
			);
		}
	};

	const renderList = () => {
		return streams.map((stream) => {
			return (
				<div className="item" key={stream.id}>
					{renderAdmin(stream)}
					<i className="large middle aligned icon camera" />
					<div className="content">
						{stream.title}
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
		});
	};

	const renderCreate = () => {
		if (isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	};

	return (
		<div>
			<h2>Streams</h2>
			<div className="ui celled list">{renderList()}</div>
			{renderCreate()}
		</div>
	);
}

const mapStateToProps = (state) => ({
	streams: Object.values(state.streams),
	currentUserId: state.auth.userId,
	isSignedIn: state.auth.isSignedIn
});

const mapDispatchToProps = { fetchStreams };

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
