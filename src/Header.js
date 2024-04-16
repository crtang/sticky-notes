import React from 'react';

const Header = (props) => {
	return (
		<header>
			<h1 className="app-header__title">Simple Text Editor</h1>
			<aside className="app-header__controls">
				<button className="add-new">
					+ New Document
				</button>
				<input 
					className="search"
					type="text"
					placeholder="Type here to search..."
					value={props.searchText}
				/>
			</aside>
		</header>
	);
}

export default Header;
