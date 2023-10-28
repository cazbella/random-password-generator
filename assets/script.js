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

  //this asks them to enter a number if they have entered a word/letters.

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect number - Please enter a number between 8-128. Please start again.")
    return;
  }

  //This checks if the length is correct
  //below are the confirm boxes to collect user preferences

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
}

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
function generatePassword(options) {
  // Define character arrays based on user input

  var characterArrays = [];

  if (options.useUpperCase) //here 'if' checks the condition in ()
  {
    //executes this if condition is truthy.
    characterArrays = characterArrays.concat(upperCasedCharacters);
    //this variable is being used to store combined character arrays.
  }
  if (options.useLowerCase) {
    characterArrays = characterArrays.concat(lowerCasedCharacters);
  }
  if (options.useSpecialChars) {
    characterArrays = characterArrays.concat(specialCharacters);
  }
  if (options.useNumbers) {
    characterArrays = characterArrays.concat(numericCharacters);
  }
 
  //from mdn docs The .concat method in JavaScript is used to combine two or more arrays, creating a new array that contains the elements of the original arrays. It doesn't modify the existing arrays but returns a new array that's a result of the concatenation.
  //With .concat(), create a new array by concatenating the elements of the selected character arrays. Adds the selected array to existing array so the characters can be used in the password. 

  // Check if at least one character type is selected. The .length method returns the number of characters in the array. If it is strictly equal to 0 the array is empty.
  if (characterArrays.length === 0) {
    return "You must select at least one character type for your password.";
    //this return checkout also returns a string message.
  }

  // Generate the password
  var password = "";
  for (var i = 0; i < options.length; i++) {
    // Randomly select a character array from the concatenated arrays. For loop iterates over the array.
    var selectedArray = getRandom(characterArrays);
    // In each iteration of the loop, a random character array is selected from the characterArrays array. The getRandom function is used to choose a random character array. This array contains the character types chosen.
    var randomCharacter = getRandom(selectedArray);
    // Add the random character to the password. Within the loop, a random character is selected from the previously chosen selectedArray. The getRandom function is used again to randomly select a character from the chosen character array.
    password += randomCharacter;
  }

  return password;
}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

generateBtn.addEventListener("click", function () {
  var passwordOptions = getPasswordOptions(); // Changed variable name here
  if (passwordOptions) {
    var generatedPassword = generatePassword(passwordOptions); // Changed variable name here
    var textAreaElement = document.querySelector("#password");
    textAreaElement.textContent = generatedPassword;
  }
});


//this enables button to be clicked and access to presenting the password in the box.


// generateBtn.addEventListener("click", function () { ... });: This line adds an event listener to the "click" event of the generateBtn element. When the button is clicked, the function inside the addEventListener is executed.
// var passwordOptions = getPasswordOptions();: This line calls the getPasswordOptions function and stores the returned value in the passwordOptions variable. This function prompts the user for various options related to the password generation, such as the length and character types.
// if (passwordOptions) { ... }: This if statement checks if the passwordOptions variable has a truthy value. If it does, it means the user has provided valid options, and the code inside the if block will be executed.
// var generatedPassword = generatePassword(passwordOptions);: This calls the generatePassword function with the passwordOptions object as an argument. The generatePassword function generates a password based on the options provided by the user and returns it.
// var textAreaElement = document.querySelector("#password");: This selects the HTML element with the ID "password" using the querySelector method. This element is the text area where the generated password will be displayed.
// textAreaElement.textContent = generatedPassword;: This sets the textContent property of the textAreaElement to the value of the generatedPassword. This displays the generated password in the text area on the web page.
// Overall, this code block sets up an event listener for the button click, collects user input for password options, generates a password based on the user's choices, and then displays the generated password in the designated text area on the webpage.
