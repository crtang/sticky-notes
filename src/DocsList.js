import React from "react";
import Doc from "./Doc";

const DocsList = (props) => {
	// get boolean values for whether or not doc text matches search terms and
	// filter docs that don't match search
	const searchMatches = props.docs.filter((doc) => doc.doesMatchSearch === true );

  // render docs
	const renderDoc = (doc) =>
    <Doc
      doc={doc}
			key={doc.id}
			onType={props.onType}
			deleteDoc={props.deleteDoc}
    />
  ;

	// map over matching docs to render them
	const docElements = searchMatches.map(renderDoc);

  // render matching docs
	return <ul className="docs-list">{ docElements }</ul>;
}

export default DocsList;
