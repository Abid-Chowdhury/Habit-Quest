// This is just a sample code to verify that your JavaScript is working
// You can replace it with your actual application code

// Select the element with the id 'app' from the HTML and store it in a variable
const appElement = document.getElementById('app');

// Create a new paragraph element
const paragraph = document.createElement('p');

// Set the text content of the paragraph
paragraph.textContent = 'Hello, World!';

// Append the paragraph to the app element
appElement.appendChild(paragraph);