import { redirect } from "react-router-dom";

export default function Filters({types}) {
    let filteredPath = ['workouts/'];

const filteredItem = (e) => {
    if (e.target.checked) {
        filteredPath.push(e.target.id);
    }
    if (!e.target.checked) {
        filteredPath = filteredPath.filter(item => item !== e.target.id);
    }

    const filterMY = filteredPath.map((item, index)=> index > 1 ? '+' + item: item).join('');
    console.log(filterMY);
    // return redirect(filteredPath.join('+'));
}

    return (
        <div className="filter">
            <h4 className="filter__title">Фильтры</h4>
            <div className="filter__types">
                <h5 className="filter__subtitle">Виды тренировок</h5>
                <ul className="filter__list">
                    <li className="filter__item" key={0}>
                        <input type="checkbox" id='all' />
                        <label htmlFor='all'>Выделить все</label></li>
                    {types.map(type => <li className="filter__item" key={type.id}>
                        <input type="checkbox" id={type.name} onClick={filteredItem} />
                        <label htmlFor={type.name}>{type.name}</label></li>)}
                </ul>
            </div>
        </div>
    )
}