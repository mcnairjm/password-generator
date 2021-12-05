// Assignment code here
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var symbolChars = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '?', '/', '>', '<'];
var randomPass =[''];

function generatePassword() {
var password = [''];

var passwordLength = parseInt(prompt('How many characters do you want your password to be? Must be between 8 and 128 characters.'));

if(passwordLength < 8 || passwordLength > 128) {
  alert('Your password must be between 8 and 128 characters. Please try again.')
};

if(!passwordLength) {
  alert('You must enter a number between 8 and 128. Please try again.')
};

var includeLower = confirm('Do you want lower case letters in your password?');
var includeUpper = confirm('Do you want upper case letters in your password?');
var includeNumber = confirm('Do you want numbers in your password?');
var includeSymbol = confirm('Do you want symbols in your password?');

if(includeLower) {
  randomPass += lowerCase
};

if(includeUpper) {
  randomPass += upperCase
};

if(includeNumber) {
  randomPass += numberChars
};

if(includeSymbol) {
  randomPass += symbolChars
};

console.log(randomPass);

for (var i = 0; i < randomPass.length; i++) {
  password = randomPass(Math.floor(Math.random() * randomPass.length));
}  
console.log(password);
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







/*var password = [''];
  var passwordCharacters = '';
  var characterLength = passwordCharacters.length;

  passwordLength = parseInt(prompt('How many characters do you want your password to be? Must be between 8-128 characters.'));

  if (passwordLength < 8 || passwordLength > 128){
  alert('Your password must be between 8 and 128 characters. Please try again.')
  return;
  };

  if (confirm('Do you want lower case characters in your password?')){
    passwordCharacters = password.concat(lowerCase)
  };

  if (confirm('Do you want upper case characters in your password?')){
    passwordCharacters = password.concat(upperCase)
  };

  if (confirm('Do you want numbers in your password?')){
    passwordCharacters = password.concat(numberChars)
  };

  if (confirm('Do you want symbols in your password?')){
    passwordCharacters = password.concat(symbolChars)
  };

  for (var index = 0; index < characterLength; index++) {
    passwordCharacters = Math.floor(Math.random() * characterLength);
    password.push(passwordCharacters);
  }

  console.log(password);

}*/
