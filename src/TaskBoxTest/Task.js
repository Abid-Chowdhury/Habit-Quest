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

const habitContainer = document.getElementById("habit-container")
document.getElementById("habit").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        addHabit();
    }
});


function addHabit(){
    if(habit.value === ''){
        alert("Enter Habit");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = habit.value;
        habitContainer.appendChild(li);

    }
    habit.value = '';
}