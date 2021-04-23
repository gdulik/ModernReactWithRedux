import React, { useContext } from 'react';
import LanguageContext from '../contexts/LanguageContext';

function LanguageSelector() {
	const { onLanguageChange } = useContext(LanguageContext);
	return (
		<div>
			Select a language:
			<i
				className="flag uk"
				onClick={() => onLanguageChange('english')}
			/>
			<i className="flag nl" onClick={() => onLanguageChange('dutch')} />
		</div>
	);
}

export default LanguageSelector;
