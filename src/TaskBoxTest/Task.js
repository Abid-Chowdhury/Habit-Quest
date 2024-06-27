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

//the function Im working on to eliminate the couple things
const habitContainer = document.getElementById("habit-container")

document.getElementById("habit").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        itemFunctionMain(habit,habitContainer,"dataHabit");
    }
});

//Adds habit specifically

function itemFunctionMain(inputID,container,cValue){ 
    if(inputID.value === ''){
       
    alert("Enter Something In the Field");       }
    else{
        addItem(container,inputID);
    }
    inputID.value = '';
    itemSave(cValue,container);
}


//basically sets the counter value after adding or subtracting a task
function EntityCounter() {
    localStorage.setItem('counter', counter);
    document.getElementById("counterValue").textContent = counter;
    console.log(counter);
}
//This is a function to add a Check Mark/X mark

function addItem(container, cValue) {
    let li = document.createElement("li");
    li.innerHTML = cValue.value; 
    container.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#10003;";
    li.appendChild(span);
    let span2 = document.createElement("span2");
    span2.innerHTML = "\u00d7";
    li.appendChild(span2);
}
    //Function that allows to remove an Item and then Add or remove point
function containerListener(container,cValue){
    container.addEventListener("click", function(e) {
        if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            counter++;
            itemSave(cValue,container);
            EntityCounter();
        } else if (e.target.tagName === "SPAN2") {
            e.target.parentElement.remove();
            counter--;
            itemSave(cValue,container);
            EntityCounter();
        }
    }, false);

}
// Your other code remains the same...
containerListener(habitContainer,"dataHabit")

//Can possibly be eliminated
const taskContainer = document.getElementById("task-container")
document.getElementById("daily").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        itemFunctionMain(daily,taskContainer,"dataTask");
    }
});


/* Allows to remove the Dailies */
containerListener(taskContainer,"dataTask")

//Save all types of data
function itemSave(dataType,containerType){
    localStorage.setItem(dataType,containerType.innerHTML);
}
//Displays all type of data
function itemDisplay(dataType,containerType){
    containerType.innerHTML = localStorage.getItem(dataType);
}



const todoContainer = document.getElementById("todo-Container")
document.getElementById("todo").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        itemFunctionMain(todo,todoContainer,"dataTodo");
    }
});
//Allows to remove todo's
containerListener(todoContainer,"dataTodo")

/* TaskContainer */

document.getElementById("counterValue").textContent = counter;


itemDisplay("dataTask",taskContainer);
itemDisplay("dataHabit",habitContainer);
itemDisplay("dataTodo",todoContainer);

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
var inputFieldElementID = 'tasks-input-field'
document.getElementById("habit").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        itemFunctionMain(habit,habitContainer,"dataHabit");
    }
});

// Check if input field is empty
function inputFieldEmpty(ID) {
    if (ID === '') {
        return true
    } else {
        return false
    }
}