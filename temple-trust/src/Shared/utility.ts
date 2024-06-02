export const updateObject = (oldObject: any, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

export const todaysDate = () => {
    let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    return mm + '/' + dd + '/' + yyyy;
}

export const slotCreater = (date: any) => {
    let slotsArr = [];

    for(let i=6; i <= 18 ; i++){

        slotsArr.push({
            date,
            startTime: i,
            endTime: i+1,
        });
    };

    return slotsArr;
};


export const displayTimeForUI = (time: number) => {
    return (time === 12) ?
        `${time}:00 PM` : (time > 12) ?
        `${time-12}:00 PM` : `${time}:00 AM`;
};