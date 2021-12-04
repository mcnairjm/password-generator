// Assignment code here
var passwordLength = '';
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbolChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '?', '/', '>', '<'];

function generatePassword() {
  prompts();

function prompts() {
  passwordLength = prompt('How many characters do you want your password to be? Must be between 8-128 characters.')

  if (passwordLength < 8 || passwordLength > 128){
  alert('Your password must be between 8 and 128 characters. Please try again.')
  return false;
  }

  lowerCasePrompt = confirm('Do you want lower case characters in your password?');

  upperCasePrompt = confirm('Do you want upper case characters in your password?');

  numberCharsPrompt = confirm('Do you want numbers in your password?');

  symbolCharsPrompt = confirm('Do you want symbols in your password?');

}

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
