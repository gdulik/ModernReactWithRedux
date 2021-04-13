import React, { useState } from 'react';

function Accordion({ items }) {
	const [ activeIndex, setActiveIndex ] = useState(null);
	const handleTitleClick = (idx) => {
		setActiveIndex(idx);
	};
	const renderedItems = items.map((item, idx) => {
		const active = activeIndex === idx ? 'active' : '';
		return (
			<React.Fragment key={item.title}>
				<div
					className={`title ${active}`}
					onClick={() => handleTitleClick(idx)}
				>
					<i className="dropdown icon" />
					{item.title}
				</div>
				<div className={`content ${active}`}>
					<p>{item.content}</p>
				</div>
			</React.Fragment>
		);
	});
	return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion;
