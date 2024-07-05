import React from "react";

const Doc = (props) => {
	const updateTitle = (e) => {
		const updatedTitle = e.target.value;
		const editedDocId = props.doc.id;
		props.onType(editedDocId, "title", updatedTitle);
	}

	const updateContent = (e) => {
		const updatedContent = e.target.value;
		const editedDocId = props.doc.id;
		props.onType(editedDocId, "content", updatedContent);
	};

	const deleteThis = () => {
		const docToDeleteId = props.doc.id;
		props.deleteDoc(docToDeleteId);
	};

  return (
    <li className="docs-list-item doc">
			<div
				contentEditable
				className="doc-title"
				type="text"
				placeholder="Untitled"
				onChange={updateTitle}
			/>

      <div
				contentEditable
				className="doc-content"
				type="text"
				placeholder="Type here."
				onChange={updateContent}
			/>

		<span className="delete-note" onClick={deleteThis} >
				X
			</span>
    </li>
  );
};

export default Doc;
