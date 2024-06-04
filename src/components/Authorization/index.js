import { useContext } from "react";
import { ActiveUserContext, ProfilesContext } from "../../contexts/ContextProvider";
import { Link } from "react-router-dom";

export default function Authorization({ toggleUserRegForm, toggleUserLoginForm }) {
    const users = useContext(ProfilesContext);
    const [activeUser, setActiveUser] = useContext(ActiveUserContext);

    const removeActiveUser = () => {
        if (activeUser) {
            localStorage.removeItem('activeUser');
            setActiveUser(null);
        }
    }

    return (
        <div>
            {activeUser ?
                <div className="authorization">
                    <Link to={`/users/${activeUser.id}`}>
                        <span>
                            <img src={activeUser.avatar} alt="Profile photo" />
                            <h4>{activeUser.name} {activeUser.surname}</h4>
                        </span>
                    </Link>
                    <Link to='/'><button className='Register' onClick={removeActiveUser}>выйти</button></Link>
                </div> :
                <div className="authorization">
                    <button className='Login' onClick={toggleUserLoginForm}>войти</button>
                    <button className='Register' onClick={toggleUserRegForm}>зарегистрироваться</button>
                </div>}
        </div>
    )
}