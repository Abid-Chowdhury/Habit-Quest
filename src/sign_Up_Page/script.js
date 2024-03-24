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

// check if user entered a valid password
function checkIfPasswordValid(password_Input) {
    if (password_Input.length >= 4) {
        return true
    } else {
        return false
    }
}

// reset username/password invalid messages
function resetUserPassInvalidMessage() {
    console.log("hel;")
    var username_Invalid_Text = document.getElementById('username-invalid-text')
    var password_Invalid_Text = document.getElementById('password-invalid-text')
    username_Invalid_Text.style.color = 'rgba(0,0,0,0)'
    password_Invalid_Text.style.color = 'rgba(0,0,0,0)'
}

// password invalid message
function passwordInvalidMessage() {
    var password_Invalid_Text = document.getElementById('password-invalid-text')
    password_Invalid_Text.style.color = '#F93943'
}

// username invalid message
function usernameInvalidMessage() {
    var username_Invalid_Text = document.getElementById('username-invalid-text')
    username_Invalid_Text.style.color = '#F93943'
}

// submit_Button_Pressed function
function submit_Button_Pressed() {
    // hide invalid messages
    resetUserPassInvalidMessage()

    // get username input
    var username_Input_Element = document.getElementById('username-field')
    var username_Input = username_Input_Element.value

    // get password input
    var password_Input_Element = document.getElementById('password-field')
    var password_Input = password_Input_Element.value

    // update username in local storage
    localStorage.setItem('username', username_Input)

    // check if user entered valid username
    var validUserName = checkIfUsernameValid(username_Input)

    // check if user entered valid password
    var validPassword = checkIfPasswordValid(password_Input)

    if (validUserName && validPassword) {
        redirectToHomePage()
    } else {
        if (!validUserName) {
            usernameInvalidMessage()
        }
        if (!validPassword) {
            passwordInvalidMessage()
        }
    }
}

// redirect to home page
function redirectToHomePage() {
    window.location.href = '../home_Page/home_Page.html'
}

