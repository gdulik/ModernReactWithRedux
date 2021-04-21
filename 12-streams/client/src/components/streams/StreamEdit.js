import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

function StreamEdit({ match, stream, fetchStream, editStream }) {
	useEffect(
		() => {
			fetchStream(match.params.id);
		},
		[ fetchStream, match.params.id ]
	);

	const onSubmit = (formValues) => {
		editStream(stream.id, formValues);
	};

	if (!stream) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<h3>Edit a Stream</h3>
			<StreamForm
				onFormSubmit={onSubmit}
				initialValues={_.pick(stream, 'title', 'description')}
			/>
		</div>
	);
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id]
	};
};

const mapDispatchToProps = { fetchStream, editStream };

export default connect(mapStateToProps, mapDispatchToProps)(StreamEdit);
