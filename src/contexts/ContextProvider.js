import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import types from './types.json';

export const WorkoutsContext = createContext();
export const TypesContext = createContext();
export const ProfilesContext = createContext();
export const ActiveUserContext = createContext();
export const ActiveCoachContext = createContext();

export const ContextProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')));
    const [activeCoach, setActiveCoach] = useState(JSON.parse(localStorage.getItem('activeCoach')));

    useEffect(() => {
        axios.get('https://66598df5de346625136ceaa4.mockapi.io/workouts')
            .then((res) => {
                setWorkouts(res.data);
            });
        axios.get('https://66598df5de346625136ceaa4.mockapi.io/profiles')
            .then((res) => {
                setProfiles(res.data);
            });
    }, []);

    const editActiveUser = (newUser) => {
        setActiveUser(activeUser => activeUser = newUser);
        localStorage.setItem('activeUser', JSON.stringify(activeUser));
        axios.put(`https://66598df5de346625136ceaa4.mockapi.io/profiles/${activeUser.id}`, activeUser);
    }

    return (
        <WorkoutsContext.Provider value={workouts}>
            <TypesContext.Provider value={types}>
                <ProfilesContext.Provider value={profiles}>
                    <ActiveUserContext.Provider value={[activeUser, setActiveUser, editActiveUser]}>
                        <ActiveCoachContext.Provider value={[activeCoach, setActiveCoach]}>
                            {children}
                        </ActiveCoachContext.Provider>
                    </ActiveUserContext.Provider>
                </ProfilesContext.Provider>
            </TypesContext.Provider>
        </WorkoutsContext.Provider>
    );
};
