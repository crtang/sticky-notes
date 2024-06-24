import React from "react";

const Controls = (props) => {
	return (
		<section className="doc-controls">
			<div className="controls-section">
				<button className="controls-button">
					<strong>B</strong>
				</button>
				<button className="controls-button">
					<em>I</em>
				</button>
				<button className="controls-button underline-button">
					<span className="underline">U</span>
				</button>
				<button className="controls-button">
					<span className="crossed-out">S</span>
				</button>
			</div>

			<div className="controls-section">
				<button className="controls-button">
					{/* left-align */}
					U
				</button>
				<button className="controls-button">
					{/* center-align */}
					U
				</button>
				<button className="controls-button">
					{/* right-align */}
					U
				</button>
				<button className="controls-button">
					{/* justify */}
					U
				</button>
			</div> 
		</section>
	);
};

export default Controls;
