// Assignment Code
/* This line assigns the button element with the id attribute 
set to  "generate" to the variable generateBtn.  
It uses document.querySelectr() method to select the element*/
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
/*This code defines the writePassword()
function which is responsible for generating a password and 
displaying it in the #password input field..*/
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
/* The event is the "click" which triggers when the button is clicked.
writePassword function is provided as the callback function to be executed when 
the "click" event occurs on the button. It will generate and display the password.*/
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var password = "";
  var length = parseInt(prompt("Enter desired password length (8-128 characters)"));

  // validate password length
  if (isNaN(length) || < 8 || length > 128) {
    alert("Invalid password length. Please enter a number between 8 and 128 characters");
    return;
  }

}
  


// Special Characters " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
// lowercase Characters "abcdefghijklmnopqrstuvwxyz"
// UPPERCASE Letters "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// Password Length min: 8 max: 128