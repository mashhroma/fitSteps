import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({items, types}) {
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
                        subtitle = 'Все';
                    }
                    if (index === 1) {
                        subtitle = types.find(type => type.path === part).name;
                    }
                    if (index > 1) {
                        subtitle = items.find(item => item.id === part).title;
                    }
                    return <li key={index}><Link to={link}>{subtitle}</Link></li>
                })
            }
        </ul>
    )
}