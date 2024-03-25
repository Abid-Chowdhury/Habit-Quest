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
    var username_Invalid_Text = document.getElementById('username-invalid-text')
    var password_Invalid_Text = document.getElementById('password-invalid-text')
    username_Invalid_Text.style.color = 'rgba(0,0,0,0)'
    password_Invalid_Text.style.color = 'rgba(0,0,0,0)'
    username_Invalid_Text.style.textShadow = '1px 1px 1px rgba(0,0,0,0)'
    password_Invalid_Text.style.textShadow = '1px 1px 1px rgba(0,0,0,0)'
}

// password invalid message
function passwordInvalidMessage() {
    var password_Invalid_Text = document.getElementById('password-invalid-text')
    password_Invalid_Text.style.color = '#F93943'
    password_Invalid_Text.style.textShadow = '1px 1px 1px rgba(0,0,0,0.2)'
}

// username invalid message
function usernameInvalidMessage() {
    var username_Invalid_Text = document.getElementById('username-invalid-text')
    username_Invalid_Text.style.color = '#F93943'
    username_Invalid_Text.style.textShadow = '1px 1px 1px rgba(0,0,0,0.2)'
}

// get username input
function get_Username_Input() {
    var username_Input_Element = document.getElementById('username-field')
    var username_Input = username_Input_Element.value
    return username_Input
}

// get password input
function get_Password_Input() {
    var password_Input_Element = document.getElementById('password-field')
    var password_Input = password_Input_Element.value
    return password_Input
}

// update username in local storage function
function update_Username_In_Local_Storage(username_Input) {
    localStorage.setItem('username', username_Input)
}

// update password in local storage function
function update_Password_In_Local_Storage(password_Input) {
    localStorage.setItem('password', password_Input)
}

// submit_Button_Pressed function
function submit_Button_Pressed() {
    // hide invalid messages
    resetUserPassInvalidMessage()

    // get username input
    var username_Input = get_Username_Input()

    // get password input
    var password_Input = get_Password_Input()

    // check if user entered valid username
    var validUserName = checkIfUsernameValid(username_Input)

    // check if user entered valid password
    var validPassword = checkIfPasswordValid(password_Input)

    if (validUserName && validPassword) {
        redirectToHomePage()
        
        // update username in local storage
        update_Username_In_Local_Storage(username_Input)

        // update password in local storage
        update_Password_In_Local_Storage(password_Input)

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

