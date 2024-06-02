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

let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;

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
        /*Below is the Javascript for the X button*/
        let span = document.createElement("span");
        span.innerHTML ="&#10003;";
        li.appendChild(span);
        let span2 = document.createElement("span2");
        span2.innerHTML="\u00d7";
        "\u00d7"
        li.appendChild(span2);

    }
    habit.value = '';
    dataSaveHabit();
}



function HabitCounter() {
    localStorage.setItem('counter', counter);
    document.getElementById("counterValue").textContent = counter;
    console.log(counter);
}

// Your other code remains the same...

habitContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        counter++;
        dataSaveHabit();
        HabitCounter();
    } else if (e.target.tagName === "SPAN2") {
        e.target.parentElement.remove();
        counter--;
        dataSaveHabit();
        HabitCounter();
    }
}, false);


function dataSaveHabit(){
    localStorage.setItem("dataHabit",habitContainer.innerHTML);
}

function dataDisplayHabit(){
    habitContainer.innerHTML = localStorage.getItem("dataHabit");
}


const taskContainer = document.getElementById("task-container")
document.getElementById("daily").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        addTask();
    }
});

function taskCounter() {
    localStorage.setItem('counter', counter);
    document.getElementById("counterValue").textContent = counter;
    console.log(counter);
}
function addTask(){
    if(daily.value === ''){
        alert("Enter Task");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = daily.value;
        taskContainer.appendChild(li);
        /*Below is the Javascript for the X button*/
        let span = document.createElement("span");
        span.innerHTML ="&#10003;";
        li.appendChild(span);
        let span2 = document.createElement("span2");
        span2.innerHTML="\u00d7";
        "\u00d7"
        li.appendChild(span2);

    }
    daily.value = '';
    dataSaveTask();
}

/* TaskContainer */
taskContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        counter++
        dataSaveTask();
        taskCounter();
    }
    else if(e.target.tagName === "SPAN2"){
        e.target.parentElement.remove();
        counter--
        dataSaveTask();
        taskCounter();
    }

}, false);


function dataSaveTask(){
    localStorage.setItem("dataTask",taskContainer.innerHTML);
}

function dataDisplayTask(){
    taskContainer.innerHTML = localStorage.getItem("dataTask");
}



const todoContainer = document.getElementById("todo-Container")
document.getElementById("todo").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        addTodo();
    }
});
function todoCounter() {
    localStorage.setItem('counter', counter);
    document.getElementById("counterValue").textContent = counter;
    console.log(counter);
}
todoContainer.addEventListener("click",function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        counter++
        dataSaveTodo();
        todoCounter();
        
    }
    else if(e.target.tagName === "SPAN2"){
        e.target.parentElement.remove();
        counter--
        dataSaveTodo();
        todoCounter();
        
    }

}, false);

function addTodo(){
    if(todo.value === ''){
        alert("Enter todo");

    }
    else{
        let li = document.createElement("li");
        li.innerHTML = todo.value;
        todoContainer.appendChild(li);
        /*Below is the Javascript for the X button*/
        let span = document.createElement("span");
        span.innerHTML ="&#10003;";
        li.appendChild(span);
        let span2 = document.createElement("span2");
        span2.innerHTML="\u00d7";
        "\u00d7"
        li.appendChild(span2);

    }
    todo.value = '';
    dataSaveTodo();
}

/* TaskContainer */

document.getElementById("counterValue").textContent = counter;

function dataSaveTodo(){
    localStorage.setItem("dataTodo",todoContainer.innerHTML);
}

function dataDisplayTodo(){
    todoContainer.innerHTML = localStorage.getItem("dataTodo");
}
dataDisplayTodo();
dataDisplayTask();
dataDisplayHabit();