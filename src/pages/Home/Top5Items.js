import { Link } from "react-router-dom"

export default function Top5Items({ title, link, items }) {
    return (
        <div className="top5">
            <h3 className="top5__title">{title}</h3>
            <ul className='top5__list'>
                {items.map((item, index) => { if (index<5) return (
                    <li className='top5__item' key={item.id}>
                        <span>{item.title}</span>
                        <img className='top5__preview' src={item.image} alt='Превью' />
                        <span>Продолжительность: {item.duration*60} минут</span>
                    </li>
                )
                })}
            </ul>
            <div className="top5__all"><Link to={link}>Показать все</Link></div>
        </div>
    )
}