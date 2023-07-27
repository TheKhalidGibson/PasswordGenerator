// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input

let lowerAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let upperAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let numbers = [0,1,2,3,4,5,6,7,8,9];
let SpecialCharacters = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', "[", '\\', "]", '^', "_", '`', '{', '|', '}', '~'];




let builtArray = []



function generatePassword(){

  if(confirm("Do you want your password to contain lowercase letters?"))
  {

    builtArray = [...builtArray, ...lowerAlphabet]

  }

  if(confirm("Do you want your password to contain uppercase letters?"))
  {

    builtArray = [...builtArray, ...upperAlphabet]

  }

  if(confirm("Do you want your password to contain numbers?"))
  {

    builtArray = [...builtArray, ...numbers]

  }

  if(confirm("Do you want your password to contain special characters?"))
  {

    builtArray = [...builtArray, ...SpecialCharacters]

  }



  
  
let password = "";

  
let passwordLength = prompt("how long do you want your password to be?")
  
  for (let i = 0; i < passwordLength; i++) {
    let generatedLetterIndex = Math.floor(Math.random()*builtArray.length)

    password += builtArray[generatedLetterIndex];
    
  }

  builtArray = []

//building a string based off of randomly selected values from an array


return password;

}


function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
