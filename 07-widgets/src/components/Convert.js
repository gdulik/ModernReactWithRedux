import React, { useState, useEffect } from 'react';
import translate from '../apis/translate';

function Convert({ language, text }) {
	const [ translated, setTranslated ] = useState('');
	const [ debouncedText, setDebouncedText ] = useState('');

	useEffect(
		() => {
			const timerId = setTimeout(() => {
				setDebouncedText(text);
			}, 500);
			return () => {
				clearTimeout(timerId);
			};
		},
		[ text ]
	);

	useEffect(
		() => {
			const doTranslation = async () => {
				const { data } = await translate.post(
					'',
					{},
					{
						params: {
							q: debouncedText,
							target: language.value
						}
					}
				);
				setTranslated(data.data.translations[0].translatedText);
			};

			doTranslation();
		},
		[ language, debouncedText ]
	);
	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
}

export default Convert;
