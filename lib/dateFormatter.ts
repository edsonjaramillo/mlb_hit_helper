const dateOptions:Intl.DateTimeFormatOptions = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'US/Central'
}

export const dateFormatter = (date: string): string => {
    const dateObj = new Date(date);
    return dateObj.toLocaleString('en-US', dateOptions);
}