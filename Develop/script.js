// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMMOPQRSTUVWXYZ";
let number = "0123456789";
let symbol = "!@#$%^&*()_+=";

// Write password to the #password input
function writePassword() {
  let passwordText = document.querySelector("#password");
  let length = window.prompt("Please enter the password length between 8 and 128");
  if ((length >= 8) && (length <= 128)) {
    let confirmUpper = window.confirm('Do you want to include upper case letters in your password?');
    let confirmNumber = window.confirm('Do you want to include numbers in your password?');
    let confirmSymbol = window.confirm('Do you want to include symbols in your password?');

    let characters = lowerCase;
    confirmUpper ? (characters += upperCase) : "";
    confirmNumber ? (characters += number) : "";
    confirmSymbol ? (characters += symbol) : "";
    

    let generatePassword = (length, characters) => {
      let password = "";
      for (let i = 0; i < length; i++) {
        password += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      return password;
    }
  console.log(generatePassword);
  passwordText.value = generatePassword(length, characters);
} else {
      window.alert("Password must be between 8 and 128 digits long.")
  };
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




