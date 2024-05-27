export default function Top5Items({ title, items }) {
    return (
        <div className="top5">
            <h3 className="top5__title">{title}</h3>
            <ul className='top5__list'>
                {items.map(item => { return (
                    <li className='top5__item' key={item.id}>
                        <span>{item.name}</span>
                        <img className='top5__preview' src={item.image} alt='Превью' />
                        <span>{item.date} {item.duration}</span>
                    </li>
                )
                })}
            </ul>
            <div className="top5__all">Показать все</div>
        </div>
    )
}