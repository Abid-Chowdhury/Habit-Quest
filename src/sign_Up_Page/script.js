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


// submit_Button_Pressed function
function submit_Button_Pressed() {
    // get username input
    var username_Input_Element = document.getElementById('username-field')
    var username_Input = username_Input_Element.value

    localStorage.setItem('username', username_Input)
    redirectToHomePage()
}

// redirect to home page
function redirectToHomePage() {
    window.location.href = '../home_Page/home_Page.html'
}

// // Check if a user already exists
// if (localStorage.getItem('username') !== null) {
//     redirectToHomePage()
// } 
