import { Link } from "react-router-dom";

export default function Submenu({workoutTypes}) {
    return (
        <nav>
            <ul className="submenu">
                {workoutTypes.map(type => <li key={type.id} className="submenu__link"><Link to={`/workouts/${type.path}`}>{type.name}</Link></li>)}
            </ul>
        </nav>
    )
}