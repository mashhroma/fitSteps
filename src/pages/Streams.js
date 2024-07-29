import React, { useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { DataContext } from "../contexts/ContextProvider";
import StreamPreview from "../components/StreamPreview";

export default function Streams() {
	const { streams } = useContext(DataContext);

	return (
		<section>
			<Breadcrumbs items={streams} />
			<div className="content">
				<ul className="workouts">
					{streams.map((stream) => (
						<li key={stream.id}>
							<StreamPreview stream={stream} />
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
