import { Link } from "react-router-dom";
import StreamPreview from "../../components/StreamPreview";

export default function Top5Streams({ streams }) {
	return (
		<div className="top blue">
			<h3 className="top__title">ТОП-5 вебинаров</h3>
			<ul className="top__list">
				{streams.map((stream, index) => {
					return (
						index < 5 && (
							<li key={stream.id}>
								<StreamPreview stream={stream} width={230} height={360} />
							</li>
						)
					);
				})}
			</ul>
			<div className="top__all">
				<Link to="/streams">Показать все</Link>
			</div>
		</div>
	);
}
