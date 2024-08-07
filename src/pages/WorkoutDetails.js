import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import Breadcrumbs from "../components/Breadcrumbs";
import {
	getCoach,
	getDescription,
	getScheduleHTML,
	getClosestStreamDate,
	renderFavorite,
	toggleFavorite,
} from "../modules/workoutsFunctions";
import {
	ActiveUserContext,
	ProfilesContext,
	TypesContext,
	DataContext,
} from "../contexts/ContextProvider";
import axios from "axios";

export default function WorkoutDetails() {
	const { id } = useParams();

	const types = useContext(TypesContext);
	const { profiles } = useContext(ProfilesContext);
	const { activeUser, editActiveUser } = useContext(ActiveUserContext);

	const { workouts } = useContext(DataContext);
	const workout = workouts.find((workout) => workout.id === id);
	const schedule = getScheduleHTML(workout);
	const coach = getCoach(workout, profiles);
	const description = getDescription(workout, types);
	const streamDate = getClosestStreamDate(workout);

	const [favoriteIcon, setFavoriteIcon] = useState(
		renderFavorite(activeUser, workout.id)
	);

	const handleFavorite = () => {
		const newUser = toggleFavorite(activeUser, workout.id);
		editActiveUser(newUser);
		localStorage.setItem("activeUser", JSON.stringify(newUser));
		axios.put(
			`https://66598df5de346625136ceaa4.mockapi.io/profiles/${newUser.id}`,
			newUser
		);
		setFavoriteIcon(renderFavorite(activeUser, workout.id));
	};

	useEffect(() => {
		setFavoriteIcon(renderFavorite(activeUser, workout.id));
	}, [activeUser, workout.id]);

	if (!workout) {
		return <div>Такого занятие нет.</div>;
	}

	return (
		<section className="text">
			<Breadcrumbs items={workouts} types={types} />

			<h1 className="workouts__title">Курс занятий: "{workout.title}"</h1>
			{activeUser && (
				<div className="favorite" onClick={handleFavorite}>
					{favoriteIcon}
				</div>
			)}
			<div className="favorite-details" onClick={handleFavorite}>
				{favoriteIcon}
			</div>
			<div className="workouts__info">
				<div className="workouts__left">
					<p className="workouts__block">
						Дата ближайшего занятия: {streamDate}
					</p>
					<div className="workouts__block">
						<h3>Расписание:</h3>
						<ul>{schedule}</ul>
					</div>
					<p className="workouts__block">
						Продолжительность: {workout.duration * 60} мин.
					</p>
				</div>
				<div className="workouts__right">
					<p className="workouts__block">{description}</p>
					<p className="workouts__block">
						Тренер:{" "}
						<Link to={`/coaches/${workout.coachId}`}>
							{coach.name} {coach.surname}
						</Link>
					</p>
				</div>
			</div>
			<div className="workouts__block">
				Ссылка на ближайшее онлайн-занятие: {workout.streamUrl}
			</div>

			<img className="workouts__img" src={workout.image} alt="Превью" />
			<div className="workouts__block">
				<Link to="/workouts">К занятиям</Link>
			</div>
		</section>
	);
}
