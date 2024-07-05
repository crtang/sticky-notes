import React from "react";
import leftJustify from './imgs/text-left.svg';
import center from './imgs/text-center.svg';
import rightJustify from './imgs/text-right.svg';
import justify from './imgs/text-justify.svg';

const Controls = (props) => {
	return (
		<section className="doc-controls">
			<div className="controls-section">
				<button className="style-button">
					<strong>B</strong>
				</button>
				<button className="style-button">
					<em>I</em>
				</button>
				<button className="style-button">
					<span className="underline">U</span>
				</button>
				<button className="style-button">
					<span className="crossed-out">S</span>
				</button>
			</div>

			<div className="controls-section">
				<button className="controls-button">
					{/* left-align */}
					<img className="resize" src={leftJustify} alt="button to left-justify text" />
				</button>
				<button className="controls-button">
					{/* center-align */}
					<img className="resize" src={center} alt="button to center text" />
				</button>
				<button className="controls-button">
					{/* right-align */}
					<img className="resize" src={rightJustify} alt="button to right-justify text"/>
				</button>
				<button className="controls-button">
					{/* justify */}
					<img className="resize" src={justify} alt="button to justify text"/>
				</button>
			</div> 
		</section>
	);
};

export default Controls;
