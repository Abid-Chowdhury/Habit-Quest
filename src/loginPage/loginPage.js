// makes sure username field is alphanumeric
// get the input element
var input = document.getElementById('usernameField')

// add event listener to the input field
input.addEventListener('input', function() {
    // regular expression to match only alphanumeric characters
    var regex = /^[a-zA-Z0-9]*$/
    
    // check if the input value matches the regular expression
    if (!regex.test(this.value)) {
        // if the input value contains characters other than alphanumeric, remove them
        this.value = this.value.replace(/[^a-zA-Z0-9]/g, '')
    }
})

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
    var wrongUserOrPassText = document.getElementById('wrongUserOrPassText')
    usernameInvalidText.style.display = 'none'
    passwordInvalidText.style.display = 'none'
    wrongUserOrPassText.style.display = 'none'
}

// password invalid message
function passwordInvalidMessage() {
    var passwordInvalidText = document.getElementById('passwordInvalidText')
    passwordInvalidText.style.display = 'block'
}

// username invalid message
function usernameInvalidMessage() {
    var usernameInvalidText = document.getElementById('usernameInvalidText')
    usernameInvalidText.style.display = 'block'
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

// check if username is correct
function usernameCorrectCheck(usernameInput) {
    if (localStorage.getItem('username') == usernameInput) {
        return true
    }
    return false
}

// check if password is correct
function passwordCorrectCheck(passwordInput) {
    if (localStorage.getItem('password') == passwordInput) {
        return true
    }
    return false
}

// check if username and password is correct
function checkIfUserAndPassCorrect(usernameInput, passwordInput) {
    if (usernameCorrectCheck(usernameInput) && passwordCorrectCheck(passwordInput)) {
        return true
    } 
    return false
}

// wrong username and password error message
function wrongUsernameAndPasswordMessage() {
    var wrongUserOrPassText = document.getElementById('wrongUserOrPassText')
    wrongUserOrPassText.style.display = 'block'
}

// redirect to home page
function redirectToHomePage() {
    window.location.href = '../home_Page/home_Page.html'
}

// if enter button pressed, activate submitButtonPressed function
document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        submitButtonPressed()
    }
})

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

    // if username and passwords are valid, check if user and pass match localstorage
    // if match -> redirect to home page
    // else show wrong user or pass message
    if (validUserName && validPassword) {
        if (checkIfUserAndPassCorrect(usernameInput, passwordInput)) {
            redirectToHomePage()
        } else {
            wrongUsernameAndPasswordMessage()
        }     

    // else show invalid username and/or invalid password message
    } else {
        if (!validUserName) {
            usernameInvalidMessage()
        }
        if (!validPassword) {
            // passwordInvalidMessage()
        }
    }
}

