// UPDATE TIME FUNCTION
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

// SHOW A SCROLLBAR IF TASKS ARE OVERFLOWING
// Check overflow function
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

// Call function for habit/daily/todo
const listOfTasks = ['habits-task-list', 'daily-task-list', 'todo-task-list']

for (let i = 0; i < listOfTasks.length; i++) {
    var elementToCheck = document.getElementById(listOfTasks[i])
    if (!checkOverflow(elementToCheck)) {
        elementToCheck.classList.remove('show')
        elementToCheck.classList.add('hide')
    } else {
        elementToCheck.classList.remove('hide')
        elementToCheck.classList.add('show')

    }
}

// TASKS FUNCTIONS
// Check if enter key is pressed while in focusing on input fields