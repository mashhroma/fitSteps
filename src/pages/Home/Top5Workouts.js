import { Link } from "react-router-dom";
import WorkoutPreview from "../../components/WorkoutPreview";

export default function Top5Workouts({ workouts }) {
	return (
		<div className="top pink">
			<h3 className="top__title">ТОП-5 онлайн-занятий</h3>
			<ul className="top__list">
				{workouts.map((workout, index) => {
					return (
						index < 5 && (
							<li key={workout.id}>
								<WorkoutPreview workout={workout} width={230} height={380} />
							</li>
						)
					);
				})}
			</ul>
			<div className="top__all">
				<Link to="/workouts">Показать все</Link>
			</div>
		</div>
	);
}
