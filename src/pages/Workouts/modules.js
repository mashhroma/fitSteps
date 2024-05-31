const weekDays = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье'
};

const getTypePath = (workout, types) => {
    return types.find(type => type.name === workout.type).path;
}

const getScheduleHTML = (workout) => {
    const scheduleSplit = workout.schedule
        .split(',')
        .map(day => day.split('-'));

    const scheduleItem = scheduleSplit.map((day, index) => {
        const weekDay = weekDays[parseInt(day[0])];
        const startWorkout = day[1];
        return <li key={index}>{weekDay}: {startWorkout}</li>
    })

    return scheduleItem;
}

const getCoach = (workout, coaches) => {
    return coaches.find(coach => coach.id === workout.coachId);
}

const getDescription = (workout, types) => {
    return types.find(type => type.name === workout.type).description;
}

const getClosestStreamDate = (workout) => {
    const today = new Date().getDay();
    const scheduleSplit = workout.schedule
        .split(',')
        .map(day => day.split('-'));
    let diff = 100;
    scheduleSplit.forEach(currDay => {
        let currDiff = currDay[0] - today;
        if (currDiff < 0) {
            currDiff += 7;
        }
        if (currDiff < diff) {
            diff = currDiff;
        }
        console.log(currDiff);
    });

    const streamDay = new Date(Date.now() + diff * 24 * 3600 * 1000);
    const month = streamDay.getMonth() + 1;

    const stringStreamDay = `${streamDay.getDate()}.${month < 10 ? '0' + month.toString() : month}.${streamDay.getFullYear()}`

    return stringStreamDay;
}

export { getTypePath, getScheduleHTML, getCoach, getDescription, getClosestStreamDate };