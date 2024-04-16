import React from "react";

const Controls = (props) => {
	return (
		<section>
			<div>
				<button>
					<strong>B</strong>
				</button>
				<button>
					<em>I</em>
				</button>
				<button className="underline">
					U
				</button>
			</div>

			<div>
				<button>
					{/* left-align */}
				</button>
				<button>
					{/* center-align */}
					U
				</button>
				<button>
					{/* right-align */}
					U
				</button>
				<button>
					{/* justify */}
					U
				</button>
			</div> 
		</section>
	);
};

export default Controls;
