import React from "react";

const Doc = (props) => {
  return (
    <div>
      <textarea className="doc-content">
				{props.content}
			</textarea>
    </div>
  );
}

export default Doc;
