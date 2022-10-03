var characterLength = 8;
var choice = [];

var specialChar = ["!", "@", "#", "$", "%" ,"^", "&", "*", "(", ")", "_", "+","{", "}", "|", "<", ">", "?",];
var lowerCass = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts){
    var newPassword = generatePassword();
     passwordText.value
    passwordText.value = newPassword; 
   }else { 
    passwordText.value =- "";

   }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
 
function generatePassword() {
var password = "";

for(var i = 0; i <characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choice.length);
 password = password + choice [randomIndex];
}
  return password;
}


function getPrompts(){ 
  choice = [];
characterLength =  parseInt(prompt(" How many characters do you want your password to be (8 - 128 characters"))

if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length has to be a number, 8 - 128 digits. Try again ");
    return false;
    }
    if(confirm( "Would you like lowercase letters in your password?")) {
      choice = choice.concat(lowerCass);
    }
    if(confirm( "Would you like upppercase letters in your password?")) {
      choice = choice.concat(upperCase);
    }
    if(confirm( "Would you like special  letters in your password?")) {
      choice = choice.concat(specialChar);
    }
    if(confirm( "Would you like lnumbers letters in your password?")) {
      choice = choice.concat(number);
    }
    return true;
}