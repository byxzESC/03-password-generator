// Get references to the #generate element
// line 31 on html, button tag
var generateBtn = document.querySelector("#generate");

// create the pool for each lowercase, uppercase, numeric, and special characters
// add them into a single string to generate random password
var numeric = '0123456789'
var lowerCase = 'acbdefghijklmnopqrstuvwxyz';
var special = '!@#$%^&*()';
var poolOfCharacters = '';

// Write password to the #password input
function writePassword() {
  // resetting poolOfCharacters every time this function runs
  poolOfCharacters = '';
  // ask user for password length
  var passwordLength = prompt("How many characters would you like your password to contain?");
  // if password is less than 8 or over 128 characters, ask them to enter length between 8 to 128.
  if (passwordLength > 128 || passwordLength < 8) {
    alert("Password must contain a minimum of 8 characters and no more than 128 characters!");
    writePassword();
    return;
  }
  // prompt to ask user for their preferences
  console.log('user chosen ' + passwordLength + ' characters password length!');
  userPref();
  // using the user preference to combine password pool
  // iterate over user chosen length and randomize chosen character types for the password

  var password = generatePassword(passwordLength);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// user preferences
function userPref() {
  if (confirm("Would you like numeric characters include in password?")) {
    console.log('user added numeric to the password generator.');
    poolOfCharacters += numeric;
  }
  if (confirm("Would you like lowercase characters include in password?")) {
    console.log('user added lowercase characters to the password generator.');
    poolOfCharacters += lowerCase;
  }
  if (confirm("Would you like uppercase characters include in password?")) {
    console.log('user added uppercase characters to the password generator.');
    poolOfCharacters += lowerCase.toUpperCase();
  }
  if (confirm("Would you like special characters include in password?")) {
    console.log('user added special characters to the password generator.');
    poolOfCharacters += special;
  }
  
  // if user hasn't chose any preferences, ask user must choose at least one type
  if (poolOfCharacters.length === 0) {
    alert('Password require at least one character type! \nPlease choose your character types include in your password.');
    userPref();
  }
}

// function for generating a valid password for user
function generatePassword(length) {
  console.log('user preferences for possible characters used for password:\n' + poolOfCharacters);
  var result = "";
  // generate a password with the length user giving and preferences that user chosen 
  for (var i = 0; i < length; i++) {
    result += poolOfCharacters[Math.floor(Math.random() * poolOfCharacters.length)];
  }
  console.log("random generated password is " + result);
  // resetting password preferences
  poolOfCharacters = "";
  return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


