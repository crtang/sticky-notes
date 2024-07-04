import React from 'react';

const Header = (props) => {
	const callSearch = (e) => {
		return props.onSearch(e.target.value);
	}

	return (
		<header>
			<h1 className="app-header__title">Simple Text Editor</h1>
			<aside className="app-header__controls">
				<button className="add-new" onClick={props.addDoc}>
					+ New Document
				</button>

				<button className="clear-docs" onClick={props.clearDocs}>
					Clear Documents
				</button>

				<input 
					className="search"
					type="text"
					placeholder="Type here to search..."
					onChange={callSearch}
				/>
			</aside>
		</header>
	);
}

export default Header;
