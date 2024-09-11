import React from 'react';

const Header = (props) => {
	const callSearch = (e) => {
		return props.onSearch(e.target.value);
	}

	return (
		<header>
			<h1 className="app-header__title">Sticky Notes</h1>
			<aside className="app-header__controls">
				<button className="add-new" onClick={props.addNote}>
					+ New Note
				</button>

				<button className="clear-notes" onClick={props.clearNotes}>
					Clear Notes
				</button>

				<label>
					<input 
						className="search"
						type="text"
						placeholder="Type here to search..."
						onChange={callSearch}
					/>
				</label>
			</aside>
		</header>
	);
}

export default Header;
