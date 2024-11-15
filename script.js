// script.js

// Function to change the background color of the body
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

// Function to display an alert with a custom message
function showAlert(message) {
  alert(message);
}

// Event listener for button click to change background color
document.getElementById("colorButton").addEventListener("click", function () {
  changeBackgroundColor("lightblue");
});

// Event listener for button click to show alert
document.getElementById("alertButton").addEventListener("click", function () {
  showAlert("Hello, this is your custom message!");
});
