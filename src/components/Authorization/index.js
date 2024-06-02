import { useContext } from "react"
import { ActiveUserContext, ProfilesContext } from "../../contexts/ContextProvider"
import { findProfile } from "./modules";

export default function Authorization({ toggleUserRegForm, toggleUserLoginForm }) {
    const users = useContext(ProfilesContext);
    const [activeUser, setActiveUser] = useContext(ActiveUserContext);

    const removeActiveUser = () => {
        if (activeUser) {
            localStorage.removeItem('activeUser');
            setActiveUser(null);
        }
    }

    const activeUserData = findProfile(users, activeUser, 'user');

    return (
        <div>
            {activeUser ?
                <div className="authorization">
                    <h4>{activeUserData.name} {activeUserData.surname}</h4>
                    <button className='Register' onClick={removeActiveUser}>выйти</button>
                </div> :
                <div className="authorization">
                    <button className='Login' onClick={toggleUserLoginForm}>войти</button>
                    <button className='Register' onClick={toggleUserRegForm}>зарегистрироваться</button>
                </div>}
        </div>
    )
}