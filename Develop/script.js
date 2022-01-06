let characterLength = 8;
let choiceArray = [];

const specialCharArr = [ '!', '@', '#', '$', '%', '^', '?', '<', '>', '=', '&', '*' ];
const lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numberArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// Write password to the #password input
function writePassword() 

