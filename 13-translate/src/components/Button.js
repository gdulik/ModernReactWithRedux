import React, { useContext } from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

function Button() {
	const { language } = useContext(LanguageContext);
	const color = useContext(ColorContext);
	const text = language === 'english' ? 'Submit' : 'Voorleggen';
	const className = `ui ${color} button`;
	return <button className={className}>{text}</button>;
}

export default Button;
