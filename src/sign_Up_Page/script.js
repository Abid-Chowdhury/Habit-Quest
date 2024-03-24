// Makes username field alphanumeric

// Get the input element
var input = document.getElementById('username-field');

// Add event listener to the input field
input.addEventListener('input', function() {
    // Regular expression to match only alphanumeric characters
    var regex = /^[a-zA-Z0-9]*$/;
    
    // Check if the input value matches the regular expression
    if (!regex.test(this.value)) {
        // If the input value contains characters other than alphanumeric, remove them
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
    }
});

// check if user entered a valid username
function checkIfUsernameValid(username_Input) {
    if (username_Input.length >= 4) {
        return true
    } else {
        return false
    }
}

// submit_Button_Pressed function
function submit_Button_Pressed() {
    // get username input
    var username_Input_Element = document.getElementById('username-field')
    var username_Input = username_Input_Element.value

    // update username in local storage
    localStorage.setItem('username', username_Input)

    // check if user entered valid username
    var validUserName = checkIfUsernameValid(username_Input)
    if (validUserName) {
        redirectToHomePage()
    } else {
        console.log('username not valid')
    }
}

// redirect to home page
function redirectToHomePage() {
    window.location.href = '../home_Page/home_Page.html'
}

