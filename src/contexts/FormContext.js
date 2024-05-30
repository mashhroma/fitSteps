import { createContext, useContext, useEffect, useState } from 'react';
import LoginUserForm from '../components/Authorization/LoginUserForm';
import RegistrationForm from '../components/Authorization/RegistrationForm';

const RegFormContext = createContext();
const LoginFormContext = createContext();

export const useRegForm = () => useContext(RegFormContext);
export const useLoginForm = () => useContext(LoginFormContext);



export function FormContext({ children }) {

    const [regFormVisibility, setRegFormVisibility] = useState(false);
    const toggleRegFormVisibility = () => {
        setRegFormVisibility((currentVisibility) => (currentVisibility === false ? true : false));
        toggleDarkerBack();
    };

    const [loginFormVisibility, setLoginFormVisibility] = useState(false);
    const toggleLoginFormVisibility = () => {
        setLoginFormVisibility((currentVisibility) => (currentVisibility === false ? true : false));
        toggleDarkerBack();
    };

    const toggleDarkerBack = () => {
        if (!regFormVisibility && !loginFormVisibility) {
            document.querySelector('.App').classList.add('formVisibility')
        } else {
            document.querySelector('.App').classList.remove('formVisibility');
        }
    }

    const hiddenRegForm = (e) => {
        if (!e.target.classList.contains('reg')) {
            if (regFormVisibility) {
                toggleRegFormVisibility();
            }
            if (loginFormVisibility) {
                toggleLoginFormVisibility();
            }
        }
    }

    return (
        <RegFormContext.Provider value={{ regFormVisibility, toggleRegFormVisibility }}>
            <LoginFormContext.Provider value={{ loginFormVisibility, toggleLoginFormVisibility }}>
                <div onClick={hiddenRegForm}>{children}</div>
                {regFormVisibility && <RegistrationForm />}
                {loginFormVisibility && <LoginUserForm />}
            </LoginFormContext.Provider>
        </RegFormContext.Provider>
    );
}
