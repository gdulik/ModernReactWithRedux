import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderError = ({ touched, error }) => {
	if (touched && error) {
		return (
			<div className="ui error message">
				<div className="header">{error}</div>
			</div>
		);
	}
};

const renderInput = ({ input, label, type, meta }) => {
	const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
	return (
		<div className={className}>
			<label>{label}</label>
			<input {...input} type={type} autoComplete="off" />
			{renderError(meta)}
		</div>
	);
};

function StreamForm({ handleSubmit, onFormSubmit }) {
	const onSubmit = (formValues) => {
		onFormSubmit(formValues);
	};

	return (
		<form className="ui form error" onSubmit={handleSubmit(onSubmit)}>
			<Field
				name="title"
				type="text"
				component={renderInput}
				label="Enter Title"
			/>
			<Field
				name="description"
				type="text"
				component={renderInput}
				label="Enter Description"
			/>
			<button className="ui button primary">Submit</button>
		</form>
	);
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'You must enter a title';
	}
	if (!formValues.description) {
		errors.description = 'You must enter a description';
	}
	return errors;
};

export default reduxForm({ form: 'streamForm', validate })(StreamForm);
