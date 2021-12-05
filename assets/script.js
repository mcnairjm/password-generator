// Assignment code here
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbolChars = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "?",
  "/",
  ">",
  "<",
];
//var x = "123456789".split("");
//console.log(x)

var randomPass = [];

function generatePassword() {
  var password = "";

  var passwordLength = parseInt(
    prompt(
      "How many characters do you want your password to be? Must be between 8 and 128 characters."
    )
  );
  //console.log(passwordLength);

  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    alert(
      "Your password must be between 8 and 128 characters. Please try again."
    );
  } else {
    var includeLower = confirm(
      "Do you want lower case letters in your password?"
    );
    var includeUpper = confirm(
      "Do you want upper case letters in your password?"
    );
    var includeNumber = confirm("Do you want numbers in your password?");
    var includeSymbol = confirm("Do you want symbols in your password?");

    if (includeLower) {
      //Use spread operator to add all lowercase characters to randomPass array, aka merging arrays
      randomPass.push(...lowerCase);
    }

    if (includeUpper) {
      randomPass.push(...upperCase);
    }

    if (includeNumber) {
      randomPass.push(...numberChars);
    }

    if (includeSymbol) {
      randomPass.push(...symbolChars);
    }

    if (!includeLower && !includeUpper && !includeNumber && !includeSymbol){
      alert('You must select at least one specification.');
      return generatePassword();
    }

    //console.log(randomPass);

    for (var i = 0; i < passwordLength; i++) {
      //return a random index from randomPass array
      passwordIndex = Math.floor(Math.random() * randomPass.length);
      //console.log(passwordIndex);

      //return the actual value from the index you got back
      randomPass[passwordIndex];

      //everytime the loop is  run, a random value will be added to password string
      password += randomPass[passwordIndex];
    }
    //console.log(password);

  }

  //function returns a final value, which is password
  return password;

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

