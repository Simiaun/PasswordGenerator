// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // var passwordText = document.querySelector("div");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Add event listener to generate butto

// We need a dataset
var numbersStr = "123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!@#$%^&*()_-+";
// var numbers = [1, 2, 3, 4, 5, 6, 7];

// grab a valur from an Array or String
//console.log(numbers[0]);
//console.log(numbersStr[0])

function generatePassword() {
  
  var pass = "";
  var password = "";
  // Capturing data from the User
  var userdata = window.prompt("How many characters do you want in your password?")
  // we want to test is userData > 128 or userData < 8.
  if(userdata < 8 || userdata > 128) {
  
    window.alert("Password is not valid"); 
    return;
  }
 // if(userdata > 128) { }

 // Capturing data from the User
  var userLowercase = window.confirm("Do you want to use lowercase characters in your password?")
  var userUppercase = window.confirm("Do you want to use uppercase characters in your password?")
  var userSpecial = window.confirm("Do you want to use special characters in your password?")
  var userNumbers = window.confirm("Do you want to use number characters in your password?")

  // validate userInputs (make sure at least 1 is TRUE)
  if(userLowercase ) {
    // if everything is FALSE then we exit (return)
    // return
    pass += lowercase
  }
  if(userUppercase ) {
    // if everything is FALSE then we exit (return)
    // return
    pass += uppercase
  }
  if(userSpecial ) {
    // if everything is FALSE then we exit (return)
    // return
    pass += special
  }
  if(userNumbers ) {
    // if everything is FALSE then we exit (return)
    // return
    pass += numbersStr
  }

  // Grab characters from each dataset that the User answered YES to (TRUE). 

  for(var i=0 ; i<userdata ; i++){
    password += pass.charAt(Math.floor(Math.random()*pass.length))
  }
  

  
  // var pass = [];

  // we want to return the built password (as a string)
  return password;
}