import React, { useState } from "react";

function Content({ items }) {
	const [sorted, setSorted] = useState(false);
	const [serverSort, setserverSort] = useState(false);
	const [distanceSort, setdistanceSort] = useState(false);

	const sortServers = (key) => {
		if (!sorted) {
			items.sort((a, b) => 
				key === 'name' ? a.name.localeCompare(b.name) : a[key] - b[key]
			);
		} else {
			items.sort((a, b) =>
				key === 'name' ? b.name.localeCompare(a.name) : b[key] - a[key]
			);
		}
		setSorted(!sorted);	
	};
 
	return (
		<div className="content">
			<div className="header">
        <div
          className="cell"
          onClick={() => {
            sortServers("name");
            setserverSort(!serverSort);
          }}
        >
          Server
          <span className={serverSort ? "arrow" : "arrow rotate"} />
        </div>
        <div
          className="cell"
          onClick={() => {
            sortServers("distance");
            setdistanceSort(!distanceSort);
          }}
        >
          Distance
					<span className={distanceSort ? "arrow" : "arrow rotate"} />
        </div>
      </div>

			<div className="wrapper">
				{items &&
				items.map((item, index) => (
					<div className="row" key={`${item.name}-${index}`}>
						<div className="cell">{item.name}</div>
						<div className="cell">{item.distance} km</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Content;