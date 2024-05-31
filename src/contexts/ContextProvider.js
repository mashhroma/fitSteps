import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import types from './types.json';

export const WorkoutsContext = createContext();
export const TypesContext = createContext();
export const ProfilesContext = createContext();

export const ContextProvider = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);
    const [profiles, setProfiles] = useState([]);

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

    return (
        <WorkoutsContext.Provider value={workouts}>
            <TypesContext.Provider value={types}>
                <ProfilesContext.Provider value={profiles}>
                    {children}
                </ProfilesContext.Provider>
            </TypesContext.Provider>
        </WorkoutsContext.Provider>
    );
};
