// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabetExample = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabetExample = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbersExample = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '=', '+', '[', ']', ':', ';', ',', '.', '/', '?', '>', '<']





function generatePassword(){


  if(confirm("Do you want your password to contain lowercase letters?"))

//building a string based off of randomly selected values from an array


return "password example"

}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
