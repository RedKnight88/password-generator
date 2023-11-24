// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Prompts for what types of characters to include in passowrd, followed by
  // a conditional (the condition of if they chose to not include any type of character)
  // to end the function early and produce an error message.
  var includeCaps = window.confirm("Would you like to include capital letters in your password?");
  var includeLower = window.confirm("Would you like to include lowercase letters in your password?");
  var includeSpec = window.confirm("Would you like to include special characters in your password?");
  var includeNum = window.confirm("Would you like to include numbers in your password?");
  var validity = (includeCaps || includeLower) || (includeSpec || includeNum);
  if (!validity) {
    return "Error, please select at least one type of character to include."
  }
  // Prompt for length of password, and if the entry is not between the stated
  // parameters, another error code is given and ending the function early.
  var passLength = window.prompt("Please enter the desired length for your password, between 8 characters and 128 characters.")
  if (passLength > 128 || passLength < 8) {
    return "Error, please select a password length between 8 and 128 characters."
  }

  // This begins the section for generating the password. The holding string will be
  // concatenated with a newly randomized character, with influence from the above 
  // choices, for the length of the password specified to introduce into the for loop.
  // Without this initialization of an empty string, each time a new password would be
  // generated, the old holding string would be included in the new password.
  var holdingString = "";

  for (i = passLength; i > 0; i--) {
    var newChar = null;//some crazy math equation to pick a new ascii number
    holdingString = holdingString + newChar;
  }
  var pass = holdingString;
  return pass;
}