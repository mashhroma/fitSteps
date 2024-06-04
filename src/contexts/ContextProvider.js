import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import types from './types.json';

export const DataContext = createContext();
export const TypesContext = createContext();
export const ProfilesContext = createContext();
export const ActiveUserContext = createContext();
export const ActiveCoachContext = createContext();

export const ContextProvider = ({ children }) => {
    const [dataItems, setDataItems] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    const [streams, setStreams] = useState([]);
    const [articles, setArticles] = useState([]);
    const [profiles, setProfiles] = useState([]);
    const [activeUser, setActiveUser] = useState(JSON.parse(localStorage.getItem('activeUser')));
    const [activeCoach, setActiveCoach] = useState(JSON.parse(localStorage.getItem('activeCoach')));
    // const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const [dataResponse, profilesResponse] = await Promise.all([
                    axios.get('https://66598df5de346625136ceaa4.mockapi.io/data'),
                    axios.get('https://66598df5de346625136ceaa4.mockapi.io/profiles'),
                ]);

                // setIsLoading(false);

                setDataItems(dataResponse.data);
                setProfiles(profilesResponse.data);
            } catch (error) {
                alert('Ошибка при запросе данных ;(');
                console.error(error);
            }
        }

        fetchData();

        setWorkouts(() => dataItems.filter(obj => obj.category === 'workout'));
        setStreams(() => dataItems.filter(obj => obj.category === 'stream'));
        setArticles(() => dataItems.filter(obj => obj.category === 'article'));
    }, []);


    const editActiveUser = (newUser) => {
        setActiveUser(activeUser => activeUser = newUser);
        localStorage.setItem('activeUser', JSON.stringify(activeUser));
        axios.put(`https://66598df5de346625136ceaa4.mockapi.io/profiles/${activeUser.id}`, activeUser);
    }

    // console.log(workouts);

    return (
        <DataContext.Provider value={{ dataItems, workouts, streams, articles }}>
            <TypesContext.Provider value={types}>
                <ProfilesContext.Provider value={profiles}>
                    <ActiveUserContext.Provider value={[activeUser, setActiveUser, editActiveUser]}>
                        <ActiveCoachContext.Provider value={[activeCoach, setActiveCoach]}>
                            {children}
                        </ActiveCoachContext.Provider>
                    </ActiveUserContext.Provider>
                </ProfilesContext.Provider>
            </TypesContext.Provider>
        </DataContext.Provider>
    );
};
