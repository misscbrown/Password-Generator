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

  function generatePassword() {

    let password = '';
    for(let i = 0; i < characterLength; i++) {
      let randomLetter = Math.floor(Math.random() * choiceArray.length)
      password = password + choiceArray[randomLetter];
  
    }
    return password;
  
  }


function getPrompts(){
    choiceArray = [];
    
      characterLength = parseInt(prompt('How many characters do you want your password to be? (8 - 128 characters)'));
    
      if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert('Character length needs to be a number, 8 - 128 digits. Please try again.');
        return false;
      
    }

 

    if (confirm('Would you like lowercase letters in your password?')) {
        choiceArray = choiceArray.concat(lowerCase);
      }
      
      if (confirm('Would you like uppercase letters in your password?')) {
        choiceArray = choiceArray.concat(upperCase);
      }
      
      if (confirm('Would you like special characters in your password?')) {
        choiceArray = choiceArray.concat(specialChar);
      }
      
      if (confirm('Would you like numbers in your password?')) {
        choiceArray = choiceArray.concat(number);
      }
      return true;
      
      }