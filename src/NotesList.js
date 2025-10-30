import Note from "./Note";

const NotesList = (props) => {
	const searchMatches = props.notes.filter((note) => note.doesMatchSearch === true );

  const renderNote = (note) =>
    <Note
      note={note}
			key={note.id}
			onType={props.onType}
			deleteNote={props.deleteNote}
    />
  ;

	const noteElements = searchMatches.map(renderNote);

  return (
		<main>
			<ul className="notes-list">{ noteElements }</ul>
		</main>
	);
}

export default NotesList;
