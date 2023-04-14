export function subtractHours(date: Date, numOfHours: number) {
    const dateCopy = new Date(date.getTime());

    dateCopy.setHours(dateCopy.getHours() - numOfHours);

    return dateCopy;
}

const staticOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
} as const;

export const getDateTime = (date: Date | string, timeZone?: string) => {
    if (!(date instanceof Date)) {
        date = new Date(date);
    }
    const options = timeZone ? {...staticOptions, timeZone} : staticOptions;
    return new Intl.DateTimeFormat("ru", options).format(date);
};

export const getTimeDifferent = (date1: Date, date2: Date = new Date()) =>
    Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60 * 60));

export const getTimeDifferentMessage = (different: number) => {
    switch (different) {
        case 0:
            return "Менее 1 часа назад";
        case 1:
            return "1 час назад";
        case 2:
        case 3:
        case 4:
            return `${different} часа назад`;
        default:
            return `${different} часов назад`;
    }
};
