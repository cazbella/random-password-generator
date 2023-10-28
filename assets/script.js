// Array of special characters to be included in password
var specialCharacters = [
  '@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  var passwordLength = parseInt(prompt("Please enter a number between 8-128 for your password length."));
  console.log(passwordLength);
  console.log(isNaN(passwordLength))

  //NaN checks for words/letters

  if (isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128 characters. Please start again.");
    return;

    //I could recursively call it here but I think that makes it annoying. they have to press button to start again. 
    
  }

  //this asks them to enter a number if they have antered a word/letters.

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect number - Please enter a number between 8-128. Please start again.")
    return;
  }

  //This checks if the length is correct


  var upperCaseCriteria = confirm("Do you require upper case letters?")
  console.log(upperCaseCriteria);

  var lowerCaseCriteria = confirm("Do you require lower case letters?")
  console.log(lowerCaseCriteria);

  var specialCharCriteria = confirm("Do you require special characters?");

  console.log(specialCharCriteria);

  var numbersCriteria = confirm("Do you require numbers?");

  console.log(numbersCriteria);

  if (!upperCaseCriteria && !lowerCaseCriteria && !specialCharCriteria && !numbersCriteria) {
    alert("You must select at least one character type for your password.");
    return;
  }
//makes sure user has at least one type of character selected. 
  var passwordOptions = {
    length: passwordLength,
    useUpperCase: upperCaseCriteria,
    useLowerCase: lowerCaseCriteria,
    useSpecialChars: specialCharCriteria,
    useNumbers: numbersCriteria
  };

  //This object is used to store the user's preferences for generating a password. e.g. length: This property stores the length that the user added.  It's set to the value of passwordLength, which is obtained from the user's input.

  return passwordOptions;
  //return "password"
  //Math.Random()
  //Math.floor()
}



//from mdn docs The .concat method in JavaScript is used to combine two or more arrays, creating a new array that contains the elements of the original arrays. It doesn't modify the existing arrays but returns a new array that's a result of the concatenation.


// Function for getting a random element from an array

function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//This creates a function to pick a random character from an array

// function called getRandom. This function takes one argument, which is an array (arr). 

//Math.random() generates a random decimal point number between 0 (inclusive) and 1 (exclusive). This number is then multiplied by the length of the input array arr.

//The Math.floor() function is used to round down the result of the multiplication to the nearest whole number/integer. This integer represents a random index within the array.
//The function returns the element from the arr at the randomly generated index. It selects a random element from the input array and returns it.

// Function to generate password with user input
// use conditionals to choose which arrays to concatenate
  // for example, if they want the special characters and the lowercase characters,
  //    put those arrays together
function generatePassword() {
  

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener("click", function () {
  var getPassword = getPasswordOptions();
  console.log(getPassword)
  var textAreaElement = document.querySelector("#password");
  console.log(textAreaElement)
  textAreaElement.textContent = getPassword
})
//this enables button to be clicked and access to presenting the password in the box.
