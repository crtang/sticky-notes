import React from "react";
import Doc from "./Doc";

const DocsList = (props) => {
    return (
        <div>
            <ul className="docs-list">
                <li className="docs-list-item">
                    <Doc />
                </li>
            </ul>
        </div>
    );
}

export default DocsList;
