import React from "react";
import Note from "./Note";

const NotesList = (props) => {
	// get boolean values for whether or not note text matches search terms and
	// filter notes that don't match search
	const searchMatches = props.notes.filter((note) => note.doesMatchSearch === true );

  // render notes
	const renderNote = (note) =>
    <Note
      note={note}
			key={note.id}
			onType={props.onType}
			deleteNote={props.deleteNote}
    />
  ;

	// map over matching notes to render them
	const noteElements = searchMatches.map(renderNote);

  // render matching notes
	return (
		<main>
			<ul className="notes-list">{ noteElements }</ul>
		</main>
	);
}

export default NotesList;
