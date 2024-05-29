import { createContext } from 'react';

import workoutsData from '../backend/workoutsData.json';
import workoutTypes from '../backend/workoutTypes.json';
import coaches from '../backend/coaches.json';

export const WorkoutsContext = createContext();
export const TypesContext = createContext();
export const CoachesContext = createContext();

export const ContextProvider = ({ children }) => {
    return (
        <WorkoutsContext.Provider value={workoutsData}>
            <TypesContext.Provider value={workoutTypes}>
                <CoachesContext.Provider value={coaches}>
                    {children}
                </CoachesContext.Provider>
            </TypesContext.Provider>
        </WorkoutsContext.Provider>
    );
};
