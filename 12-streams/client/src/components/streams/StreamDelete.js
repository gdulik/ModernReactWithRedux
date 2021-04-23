import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

function StreamDelete({ match, stream, fetchStream, deleteStream }) {
	useEffect(
		() => {
			fetchStream(match.params.id);
		},
		[ fetchStream, match.params.id ]
	);

	const renderActions = () => (
		<React.Fragment>
			<button
				onClick={() => deleteStream(stream.id)}
				className="ui button negative"
			>
				Delete
			</button>
			<Link to="/" className="ui button">
				Cancel
			</Link>
		</React.Fragment>
	);

	const renderContent = () => {
		if (!stream) {
			return 'Are you sure you want to delete this stream?';
		}
		return `Are you sure you want to delete stream with title: ${stream.title}?`;
	};

	return (
		<Modal
			title="Delete Stream"
			content={renderContent()}
			actions={renderActions()}
			onDismiss={() => history.push('/')}
		/>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

const mapDispatchToProps = { fetchStream, deleteStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamDelete);
