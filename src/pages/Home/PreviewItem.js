export default function PreviewItem({ item }) {
    return (
        <li className='Workouts__mini'>
            <span>{item.name}</span>
            <img className='Workouts__preview' src={item.image} />
            <span>{item.date} {item.duration}</span>
        </li>
    )
}
