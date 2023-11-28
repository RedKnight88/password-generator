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

  // This begins the section for generating the password. The pass string will be
  // concatenated with a newly randomized character, with influence from the above 
  // choices, for the length of the password specified to introduce into the for loop.
  // Without this initialization of an empty string, each time a new password would be
  // generated, the old pass string would be included in the new password.
  var pass = "";

  for (i = passLength; i > 0; i--) {
    var newChar = generateRandomCharacter(includeCaps, includeLower, includeNum, includeSpec);
    console.log(newChar);
    pass = pass + newChar;
  }
  return pass;
}

/* This function generates the character to add to the password in the above function.
* The parameteres are the booleans input from the confirms from the above function,
* which determine which kinds of characters are able to be chosen for the characters.
* The function creates an array of potential characters to choose from, which is added to
* through each conditional statement. Based on those parameters, a character randomly
* chosen from a string of characters fitting that criteria will be placed within the
* array of potential characters. When one is chosen from each potential input type and
* placed in the options array, one is chosen at random from that options array and 
* returned to be placed as the next character in the password. This means that each
* character type has an equal opportunity to be placed in the password. 
*/
function generateRandomCharacter(capsBool, lowerBool, numBool, specBool) {
  
  var optionsArray = [];

  if (capsBool) {
    var capsString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var capsChar = capsString[Math.floor(Math.random() * (capsString.length))];
    optionsArray.push(capsChar);
  }
  if (lowerBool) {
    var lowerString = "abcdefghijklmnopqrstuvwxyz";
    var lowerChar = lowerString[Math.floor(Math.random() * (lowerString.length))];
    optionsArray.push(lowerChar);
  }
  if (numBool) {
    var numString = "0123456789";
    var numChar = numString[Math.floor(Math.random() * (numString.length))];
    optionsArray.push(numChar);
  }
  if (specBool) {
    var specString = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var specChar = specString[Math.floor(Math.random() * (specString.length))];
    optionsArray.push(specChar);
  }

  generatedChar = optionsArray[Math.floor(Math.random() * (optionsArray.length))];
  return generatedChar;
}