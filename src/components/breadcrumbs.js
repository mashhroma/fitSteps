import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs({types}) {
    const { pathname } = useLocation();
    const pathParts = pathname
                        .split('/')
                        .filter(part => part !== '');
    console.log(pathParts);
    let link = '';

    return (
        <ul className="breadcrumbs">
            {
                pathParts.map((part, index) => {
                    link += ('/' + part);
                    let subtitle = '';
                    console.log(pathParts);
                    if (index === 0) {
                        subtitle = 'Все';
                    }
                    if (index === 1) {
                        subtitle = types.find(type => type.path === part).name;
                    }
                    if (index > 1) {
                        subtitle = part;
                    }
                    return <li><Link to={link}>{subtitle}</Link></li>
                })
            }
        </ul>
    )
}