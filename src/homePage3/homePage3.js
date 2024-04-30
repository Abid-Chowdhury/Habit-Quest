// Update time function
function updateClock() {
    const now = new Date()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    let seconds = now.getSeconds()
    let meridiem = 'AM'

    // convert 24 hour to 12 hour format
    if (hours > 12) {
        hours -= 12
    }

    // add leading 0 to hours if needed
    if (hours < 10) {
        hours = "0" + hours
    }

    // add leading 0 to minutes if needed
    if (minutes < 10) {
        minutes = "0" + minutes
    }

    // add leading 0 to seconds if needed
    if (seconds < 10) {
        seconds = "0" + seconds
    }

    // get AM or PM
    if (now.getHours() >= 12) {
        meridiem = 'PM'
    } else {
        meridiem = 'AM'
    }

    // format time (HH:MM:SS AM/PM)
    const timeString = hours + ":" + minutes + ':' + seconds + ' ' + meridiem

    // update html time element
    const timeElement = document.getElementById('time')
    timeElement.innerHTML = timeString
}

setInterval(updateClock, 1000);
updateClock();