import React from 'react';
import ReactDOM from 'react-dom';

// const getButtonText = () => {
// 	return 'Click on me!';
// };

const App = () => {
	const buttonText = 'Click me!';
	return (
		<div>
			<label className="label" htmlFor="name">
				Enter name:
			</label>
			<input type="text" id="name" />
			<button style={{ backgroundColor: 'blue', color: 'white' }}>
				{buttonText.text}
				{/* {getButtonText()} */}
			</button>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
