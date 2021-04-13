import React, { useState } from 'react';
import Accordion from './Accordion';
import Dropdown from './Dropdown';
import Search from './Search';
import Translate from './Translate';
import Route from './Route';
import Header from './Header';

const items = [
	{
		title: 'What is React?',
		content: 'React is a front end javascript framework'
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers'
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components'
	}
];

const options = [
	{
		label: 'Red',
		value: 'red'
	},
	{
		label: 'Green',
		value: 'green'
	},
	{
		label: 'Blue',
		value: 'blue'
	}
];

function App() {
	const [ selected, setSelected ] = useState(options[0]);
	return (
		<div>
			<Header />
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown
					options={options}
					selected={selected}
					handleSelectedChange={setSelected}
					label="Select a Color"
				/>
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
}

export default App;
