// Assignment code here
var passwordLength = 8;
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '{', '}', '~'];
var choicesMade = [];

// STEP 1: Grabs the button in html with generate ID and stores it in the JS variable named generateBtn 
var generateBtn = document.querySelector("#generate");


// STEP 3: This function starts after button is clicked
// Function writes a new password to the #password input
function writePassword() {

  // Including this function inside writePassword function ensures the user is prompted with options when the button is clicked
  optionPrompts();

  var password = generatePassword();

  // Grabs the text box with password ID from the html and stores it in the JS variable named passwordText
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Declares generatePassword function 
function generatePassword(){
}

// This function prompts the user with options for the new password criteria
function optionPrompts(){
  passwordLength = parseInt(prompt("How long would you like your password to be? \n (Must be between 8 - 128 characters)"));

  // Adds if statement to alert user if they didn't enter valid inputs
  // isNAN(passwordLength) checks if the user entered a number or not
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please make sure you entered a valid number, and the password length is between 8 - 128 characters");
    // Triggers optionsPrompt again if user entered invalid options
    optionPrompts();
  } if(confirm("Do you want to include lowercase letters?")){
    // Updates empty choicesMade array value to include lowercase letters by concatinating both values
    choicesMade = choicesMade.concat(lowerCase);
  } if(confirm("How about uppercase letters?")){
    choicesMade = choicesMade.concat(upperCase);
  } if(confirm("Would you like to include numbers")){
    choicesMade = choicesMade.concat(numberArray);
  } if(confirm("Lastly do you want special characters in your new password?")){
    choicesMade = choicesMade.concat(specialChar);
  } return true;
}


// STEP 2: Adds event listener to generate button so when the user clicks the button, the writePassword function starts
generateBtn.addEventListener("click", writePassword);




// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
