
export function UnixToDate(unixTimestamp : number) {
    let dateObj = new Date(unixTimestamp * 1000);
    let utcString = (dateObj.getUTCMonth() + 1) + "/" + dateObj.getUTCDate();
    return utcString
}

export function DateToUnix(month : number, day : number) {
    const currDate = new Date(Date.now())
    const currMonth = currDate.getUTCMonth() + 1
    const currDay = currDate.getUTCDate()

    let year = currDate.getUTCFullYear()
    let dateObj

    if (month < currMonth || (month == currMonth && day <= currDay)) {
        dateObj = new Date(year + 1, month - 1, day)
    }
    else {
        dateObj = new Date(year, month - 1, day)
    }

    return dateObj.getTime() / 1000
}