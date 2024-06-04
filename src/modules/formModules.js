const isFormCorrect = (elements) => {
    return Array.from(elements).filter(element => element.required && element.value === '').length === 0;
};

const getProfileDataFromForm = (elements, role) => {
    const userData = { role: role };
    Array.from(elements).forEach(element => {
        if (element.name) {
            userData[element.name] = element.value
        };
    });
    return userData;
};

const findProfile = (profiles, email, role) => {
    return profiles
        .filter(currProfile => currProfile.role === role)
        .find(currProfile => currProfile.email === email);
};

const isPasswordCorrect = (profile, password) => {
    return profile.password === password;
};

export { isFormCorrect, getProfileDataFromForm, findProfile, isPasswordCorrect };
