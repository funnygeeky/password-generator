// Assignment Code
var generateBtn = document.querySelector("#generate");

//Listen for the Button click
//document.getElementById("generateBtn").addEventListener("click")
//Declare arrays for password character types:
var Upper = ['A','B','C', 'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var Lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var Special = ['#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','['];
var Numeric = [0,1,2,4,5,6,7,8,9];
function length ()
//Get password length 
  var passwordLength=parseInt(prompt("How many characters would you like your password to have?"));
//Test password length
{
  if (passwordLength < 8)
  alert("The password needs to have at least 8 characters.");
  return;
}
  
  if(passwordLength > 128)
  alert("The password must be less than 128 characters.");
return;
  

  

//Prompts to confirm character type inputs

var wantSpecial = confirm("Do you want to include special characters?");
var wantNumeric = confirm("Do you want to include numbers?");
var wantLowercase = confirm("Do you want to include lowercase characters?");
var wantUppercase = confirm("Do you want to include uppercase characters?");

If (!wantSpecial && !wantNumeric && !wantLowercase && !wantUppercase) 
{
  alert("Your password must contain at least one special, numeric, lowercase, or uppercase character type.");
}



//Put Password inputs into a variable to generate a password
var passwordInputs = {
  length: passwordLength,
  specialCharacters: wantSpecial,
  numeric: wantNumeric,
  lowerCase: wantLowercase,
  upperCase: wantUppercase
}

return passwordInputs;

//Create password
function generatePassword (){

  var Inputs = generateInputs()
  console.log (Inputs)

  var passwordPool = []
  console.log (passwordPool)

  if (passwordInputs.specialCharacters) {
    for (i = 0; i < Special.length; ++i) {
      passwordPool.push(Special[i]);
    }
  }
if (passwordInputs.numeric) {
  for (i = 0; i< Numeric.length; ++i) {
    passwordPool.push(Numeric[i]);
  }
}
if (passwordInputs.lowerCase) {
  for(i = 0; i < Lower.length; ++i) {
    passwordPool.push(Lower[i]);
  }
}
if (passwordInputs.upperCase) {
  for(i = 0; i <Upper.length; ++i) {
    passwordPool.push(Upper [i]);
  }
}
}
//Password Text to be displayed
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
