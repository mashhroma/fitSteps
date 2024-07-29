import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({ items, types = null }) {
    const { pathname } = useLocation();
    const pathParts = pathname
        .split('/')
        .filter(part => part !== '');
    let link = '';

    return (
        <ul className="breadcrumbs">
            {
                pathParts.map((part, index) => {
                    link += ('/' + part);
                    let subtitle = '';
                    if (index === 0) {
                        switch (part) {
                            case 'workouts':
                                subtitle = 'Все занятия';
                                break;
                            case 'streams':
                                subtitle = 'Все вебинары';
                                break;
                            case 'articles':
                                subtitle = 'Все статьи';
                                break;
                            default:
                                break;
                        }
                    }
                    if (index === 1) {
                        if (pathParts[0] === 'workouts') {
                            subtitle = types.find(type => type.path === part).name;
                        } else {
                            subtitle = items.find(item => item.id === part).title;
                        }
                    }
                    if (index > 1 && pathParts[0] === 'workouts') {
                        subtitle = items.find(item => item.id === part).title;
                    }
                    return <li key={index}><Link to={link}>{subtitle}</Link></li>
                })
            }
        </ul>
    )
}
