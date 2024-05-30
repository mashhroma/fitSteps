const isFormCorrect = (elements) => {
    return Array.from(elements).filter(element => element.required && element.value === '').length === 0;
}

const setErrorMessageVisibility = (isCorrect) => {
    document
        .querySelector('.message')
        .setAttribute('style', `visibility: ${isCorrect ? 'hidden' : 'visible'};`);
}

const getUserDataFromForm = (elements) => {
    const userData = {};
    Array.from(elements).forEach(element => {
        if (element.name) {
            userData[element.name] = element.value
        };
    });
    return userData;
}

export { isFormCorrect, setErrorMessageVisibility, getUserDataFromForm };