var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function to generate a password based on user-selected requirements
function generatePassword() {
  var passwordLength = getPasswordLength();
  var characterTypes = getCharacterTypes();
  
  // Validate user input
  if (!passwordLength || !characterTypes) {
    alert("Please choose valid password requirements.");
    return "";
  }
  
  // Generate the password based on selected criteria
  var password = "";
  var availableCharacters = "";
  
  if (characterTypes.lowercase) {
    availableCharacters += "abcdefghijklmnopqrstuvwxyz";
  }
  
  if (characterTypes.uppercase) {
    availableCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  
  if (characterTypes.numeric) {
    availableCharacters += "0123456789";
  }
  
  if (characterTypes.special) {
    availableCharacters += "!@#$%^&*()-=_+[]{}|;':\",./<>?";
  }
  
  for (var i = 0; i < passwordLength; i++) {
    password += availableCharacters.charAt(Math.floor(Math.random() * availableCharacters.length));
  }
  
  return password;
}

// Prompt user for password length and return the chosen length
function getPasswordLength() {
  var length = prompt("Enter the desired password length (between 8 and 128 characters):");
  length = parseInt(length);
  
  if (isNaN(length) || length < 8 || length > 128) {
    return null;
  }
  
  return length;
}

// Prompt user for character types and return an object indicating the selected types
function getCharacterTypes() {
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");
  
  if (!lowercase && !uppercase && !numeric && !special) {
    return null;
  }
  
  return {
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special
  };
}

