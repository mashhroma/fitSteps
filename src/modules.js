import LoginUserForm from "./components/Authorization/LoginUserForm";
import RegistrationForm from "./components/Authorization/RegistrationForm";

export const setForm = (e) => {
    if (e.target.closest('.Login')) {
        return <LoginUserForm />;
    }
    if (e.target.closest('.Register')) {
        return <RegistrationForm />;
    }
};