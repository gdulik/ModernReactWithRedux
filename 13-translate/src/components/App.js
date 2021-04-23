import React from 'react';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';

function App() {
	return (
		<div className="ui container">
			<LanguageStore>
				<LanguageSelector />
				<ColorContext.Provider value="red">
					<UserCreate />
				</ColorContext.Provider>
			</LanguageStore>
		</div>
	);
}

export default App;
