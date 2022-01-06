let characterLength = 8;
let choiceArray = [];

const specialChar = [ '!', '@', '#', '$', '%', '^', '?', '<', '>', '=', '&', '*' ];
const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() {
    let correctPrompts = getPrompts();
    let passwordText = document.querySelector("#password");
    
    if(correctPrompts) {
      let newPassword = generatePassword();
    
      passwordText.value = newPassword;
      
    } else {
      passwordText.value = ''; 
  
    }
  
  
  } 

