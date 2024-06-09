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

// Update date function
function updateDate() {
    const now = new Date()

    // formatting options
    const options = {
        month: 'short',
        day: '2-digit',
        year: 'numeric'
    }

    // convert date to format
    const dateString = now.toLocaleDateString('en-US', options)

    // update date element
    const dateElement = document.getElementById('date')
    dateElement.innerHTML = dateString
}

updateDate()
setInterval(updateDate, 1000)










// CHECK FOR TASKS OVERFLOW
// Determines if the passed element is overflowing its bounds,
// either vertically or horizontally.
// Will temporarily modify the "overflow" style to detect this
// if necessary.
function checkOverflow(elementBeingChecked)
{
   var curOverflow = elementBeingChecked.style.overflow;

   if ( !curOverflow || curOverflow === "visible" )
      elementBeingChecked.style.overflow = "hidden";

   var isOverflowing = elementBeingChecked.clientWidth < elementBeingChecked.scrollWidth 
      || elementBeingChecked.clientHeight < elementBeingChecked.scrollHeight;

   elementBeingChecked.style.overflow = curOverflow;

   return isOverflowing;
}

var elm = document.getElementById('habits-task-list')
if (!checkOverflow(elm)) {
    console.log('no overflow')
    elm.classList.remove('show')
    elm.classList.add('hide')
    
} else {
    console.log('overflow')
    elm.classList.remove('hide')
    elm.classList.add('show')

}

var elm = document.getElementById('daily-task-list')
if (!checkOverflow(elm)) {
    console.log('no overflow')
    elm.classList.remove('show')
    elm.classList.add('hide')
    
} else {
    console.log('overflow')
    elm.classList.remove('hide')
    elm.classList.add('show')

}
var elm = document.getElementById('todo-task-list')
if (!checkOverflow(elm)) {
    console.log('no overflow')
    elm.classList.remove('show')
    elm.classList.add('hide')
    
} else {
    console.log('overflow')
    elm.classList.remove('hide')
    elm.classList.add('show')

}