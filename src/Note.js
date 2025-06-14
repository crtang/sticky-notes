const Note = (props) => {
	const updateTitle = (e) => {
		const updatedTitle = e.target.value;
		const editedNoteId = props.note.id;
		props.onType(editedNoteId, "title", updatedTitle);
	}

	const updateContent = (e) => {
		const updatedContent = e.target.value;
		const editedNoteId = props.note.id;

		props.onType(editedNoteId, "content", updatedContent);
	};

	const deleteThis = () => {
		const noteToDeleteId = props.note.id;
		props.deleteNote(noteToDeleteId);
	};

  return (
    <li className="notes-list-item note">
			<input
				className="note-title"
				type="text"
				placeholder={props.note.title ? "" : "Untitled"}
				value={props.note.title}
				onChange={updateTitle}
			/>

      <textarea
				className="note-content"
				type="text"
				placeholder={props.note.content ? "" : "Type here."}
				value={props.note.content}
				onChange={updateContent}
			/>

			<span className="delete-note" onClick={deleteThis} >
				X
			</span>
    </li>
  );
};

export default Note;
