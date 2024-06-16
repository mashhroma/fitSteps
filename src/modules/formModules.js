const isFormCorrect = (elements) => {
    return Array.from(elements).filter(element => element.required && element.value === '').length === 0;
};

const createProfile = (elements, role, profiles) => {
    let userData = {
        id: Math.max(...profiles.map(profile => +profile.id)) + 1,
        role: role,
        avatar: '/images/default_avatar.webp',
        about: 'Напишите немного о себе'
    };
    Array.from(elements).forEach(element => {
        if (element.name) {
            userData[element.name] = element.value
        };
    });
    if (role === 'user') {
        userData = {
            ...userData,
            favorites: [],
            subscribe: {
                isActive: false,
                type: null,
                startDate: null,
                endDate: null
            }
        }
    }
    if (role === 'coach') {
        userData = {
            ...userData,
            balance: 500
        }
    }
    return userData;
};

const getProfileDataFromForm = (elements) => {
    let userData = {};
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

export { isFormCorrect, getProfileDataFromForm, findProfile, isPasswordCorrect, createProfile };

