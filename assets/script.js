// Assignment code here
var passwordLength = '';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numberChars = '1234567890'
var symbolChars = '!@#$%^&*()-=+?/><';

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
