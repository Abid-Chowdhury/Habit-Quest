// makes sure username field is alphanumeric
// get the input element
var input = document.getElementById('usernameField');

// add event listener to the input field
input.addEventListener('input', function() {
    // regular expression to match only alphanumeric characters
    var regex = /^[a-zA-Z0-9]*$/;
    
    // check if the input value matches the regular expression
    if (!regex.test(this.value)) {
        // if the input value contains characters other than alphanumeric, remove them
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '');
    }
});

// check if user entered a valid username
function checkIfUsernameValid(usernameInput) {
    if (usernameInput.length >= 4) {
        return true
    } else {
        return false
    }
}

// check if user entered a valid password
function checkIfPasswordValid(passwordInput) {
    if (passwordInput.length >= 4) {
        return true
    } else {
        return false
    }
}

// reset username/password invalid messages
function resetUserPassInvalidMessage() {
    var usernameInvalidText = document.getElementById('usernameInvalidText')
    var passwordInvalidText = document.getElementById('passwordInvalidText')
    usernameInvalidText.style.color = 'rgba(0,0,0,0)'
    passwordInvalidText.style.color = 'rgba(0,0,0,0)'
    usernameInvalidText.style.textShadow = '1px 1px 1px rgba(0,0,0,0)'
    passwordInvalidText.style.textShadow = '1px 1px 1px rgba(0,0,0,0)'
}

// password invalid message
function passwordInvalidMessage() {
    var passwordInvalidText = document.getElementById('passwordInvalidText')
    passwordInvalidText.style.color = '#F93943'
    passwordInvalidText.style.textShadow = '1px 1px 1px rgba(0,0,0,0.2)'
}

// username invalid message
function usernameInvalidMessage() {
    var usernameInvalidText = document.getElementById('usernameInvalidText')
    usernameInvalidText.style.color = '#F93943'
    usernameInvalidText.style.textShadow = '1px 1px 1px rgba(0,0,0,0.2)'
}

// get username input
function getUsernameInput() {
    var usernameInputElement = document.getElementById('usernameField')
    var usernameInput = usernameInputElement.value
    return usernameInput
}

// get password input
function getPasswordInput() {
    var passwordInputElement = document.getElementById('passwordField')
    var passwordInput = passwordInputElement.value
    return passwordInput
}

// update username in local storage function
function updateUsernameInLocalStorage(usernameInput) {
    localStorage.setItem('username', usernameInput)
}

// update password in local storage function
function updatePasswordInLocalStorage(passwordInput) {
    localStorage.setItem('password', passwordInput)
}

// submitButtonPressed function
function submitButtonPressed() {
    // hide invalid messages
    resetUserPassInvalidMessage()

    // get username input
    var usernameInput = getUsernameInput()

    // get password input
    var passwordInput = getPasswordInput()

    // check if user entered valid username
    var validUserName = checkIfUsernameValid(usernameInput)

    // check if user entered valid password
    var validPassword = checkIfPasswordValid(passwordInput)

    // if username and passwords are valid, redirect to home page
    if (validUserName && validPassword) {
        redirectToHomePage()
        
        // update username in local storage
        updateUsernameInLocalStorage(usernameInput)

        // update password in local storage
        updatePasswordInLocalStorage(passwordInput)

    // else show invalid username and/or invalid password message
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

