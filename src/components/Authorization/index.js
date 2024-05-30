import { useRegForm, useLoginForm } from "../../contexts/FormContext";


export default function Authorization() {
    const { toggleRegFormVisibility } = useRegForm();
    const { toggleLoginFormVisibility } = useLoginForm();

    return (
        <div className="authorization">
            <button className='Login' onClick={toggleLoginFormVisibility}>войти</button>
            <button className='Register' onClick={toggleRegFormVisibility}>зарегистрироваться</button>
        </div>
    )
}