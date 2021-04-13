import React, { useState, useEffect, useRef } from 'react';

function Dropdown({ label, options, selected, handleSelectedChange }) {
	const [ open, setOpen ] = useState(false);
	const ref = useRef();

	useEffect(() => {
		const onBodyClick = (event) => {
			if (ref.current.contains(event.target)) {
				return;
			}
			setOpen(false);
		};
		document.body.addEventListener('click', onBodyClick, { capture: true });

		return () => {
			document.body.removeEventListener('click', onBodyClick, {
				capture: true
			});
		};
	}, []);

	const renderedOptions = options
		.filter((option) => option !== selected)
		.map((option) => (
			<div
				key={option.value}
				className="item"
				onClick={() => handleSelectedChange(option)}
			>
				{option.label}
			</div>
		));
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div
					className={`ui selection dropdown ${open &&
						'visible active'}`}
					onClick={() => setOpen(!open)}
				>
					<i className="dropdown icon" />
					<div className="text">{selected.label}</div>
					<div className={`menu ${open && 'visible transition'}`}>
						{renderedOptions}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dropdown;
