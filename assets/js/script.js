// Assignment code here
// Declares variables and assigns all the character options available to the user.
var passwordLength = 8;
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '_', '{', '}', '~'];
// Creates an empty array to store the character choicesMade array based on the choices made in the optionPrompts function
var choicesMade = [];

// STEP 1: Grabs the button in html with the generate ID and stores it in the JS variable named generateBtn so that we can add an event listener to wait for a click of the button to trigger the main function.
var generateBtn = document.querySelector("#generate");

// STEP 3: This main function starts after Generate Password button is clicked
// The writePassword function calls the optionPrompts function, generatePassword function, grabs the text box from HTML, and displays the new password to the text box.
function writePassword() {
  // STEP 4: Declares the choicesMade variable and stores the value of the optionPrompt() by calling the optionPrompts function
  // Including optionPrompts function inside writePassword function ensures the user is prompted with options when the button is clicked
  var choicesMade = optionPrompts();

  // STEP 7: This if statements makes sure the user made decisions and returns true to run the rest of the code block
  if (choicesMade) {

  // STEP 8: Creates password variable that stores the return value of generatePassword function and calls the function generatePassword
  var randomPassword = generatePassword();
  // STEP 13: Grabs the text box with password ID from the html and stores it in the JS variable named passwordText
  var passwordText = document.querySelector("#password");

  // STEP 14: Changes the value of the passwordText to the value of the randomPassword variable that was generated using the generatePassword() function and displays it inside the text box
  passwordText.value = randomPassword;
  // This else statement only runs if the choicesMade conditional returns false
  } else {
  // Return exits the function if the else statement is triggered
    return;
  }
}

// STEP 9: Declares generatePassword function and runs code to generate a new password 
function generatePassword(){
  // STEP 10: Creates a variable with an empty string to store the value of the newly created password
  var password = "";
  // STEP 11: This for loop iterates the length of the password the user selected until its no longer less than passwordLength
  for(var i = 0; i < passwordLength; i++) {
    // Creates a random index number to select a random character in each iteration 
    var randomIndex = Math.floor(Math.random() * choicesMade.length);
    // Changes the value of password by picking a random character in the choicesMade array with the randomIndex value on each iteration and adds it to the existing password value 
    password = password + choicesMade[randomIndex];
  }
  //STEP 12: Returns the new value of password otherwise the value will be displayed as "undefined"
  return password; 
} 

// STEP 5: This function prompts the user with options for the new password criteria and runs if statements that use confirm method to return true or false answers depending on user choices
function optionPrompts(){
  // Setting the choicesMade array to an empty array ensures that each time the user is prompted for password criteria, the criteria array is cleared and will not include any characters from the previous password generated
  choicesMade = [];
  // parseInt ensure that the user input for passwordLength returns an integer to use and not a string
  passwordLength = parseInt(prompt("How long would you like your password to be? \n (Must be between 8 - 128 characters)"));

  // Step 6: Adds if statement to check conditionals and alert user if they didn't enter valid inputs
  // isNAN(passwordLength) checks if the user entered a number or not, the or conditions makes sure they stayed within the character length range
  if(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Try again. Please make sure you entered a valid number, and the password length is between 8 - 128 characters");
    // This "return" exits the function if the user does not follow the rules
    return;
  } if (confirm("Do you want to include lowercase letters?")){
    // The code inside the if statements updates the choicesMade array value to include character options by concatinating both arrays
    choicesMade = choicesMade.concat(lowerCase);
  } if(confirm("How about uppercase letters?")){
    choicesMade = choicesMade.concat(upperCase);
  } if(confirm("Would you like to include numbers?")){
    choicesMade = choicesMade.concat(numberArray);
  } if(confirm("Do you want special characters in your new password?")){
    choicesMade = choicesMade.concat(specialChar);
    // This if statement validates the user inputs to ensure the user made selections after deciding the password length
  } if (choicesMade.length !== 0) {
    // Returns true at the end of this function which makes the if(choicesMade) conditional true in the writePassword function 
    return true;
    // Else statement alerts the user that they did not select any password criteria after choosing the password length
  } else {
    alert("You chose the length but did not make any other selections, please try again.");
  } 
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