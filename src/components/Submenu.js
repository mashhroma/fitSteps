import { useContext } from "react";
import { Link } from "react-router-dom";
import { TypesContext } from '../contexts/ContextProvider';

export default function Submenu() {
    const workoutTypes = useContext(TypesContext);

    return (
        <nav>
            <ul className="submenu">
                {workoutTypes.map(type => <li key={type.id} className="submenu__link"><Link to={`/workouts/${type.path}`}>{type.name}</Link></li>)}
            </ul>
        </nav>
    )
}
