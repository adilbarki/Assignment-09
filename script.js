// Assignment 1:
// Task: Write a JavaScript function that takes two numbers as arguments and returns their sum.
// Function Name: addNumbers
// Requirements:
// The function should take two numerical arguments, num1 and num2.
// The function should return the result of num1 + num2.
// Test the function with different inputs (e.g., addNumbers(2, 3), addNumbers(5, 1)).

//function addNumbers(num1, num2) {
  //  return num1 + num2;
//}
//let a = addNumbers(3,4)       //Both are same 
//console.log(a)                //way to print the result
//console.log(addNumbers(3,4))     //Both are same way to print the result

// Assignment 2:
// Task: Write a JavaScript function that takes a string as an argument and returns the string in uppercase.
// Function Name: toUpper
// Requirements:
// The function should take a string argument, str.
// The function should return the uppercase version of str using the toUpperCase() method.
// Test the function with different inputs (e.g., toUpper("hello"), toUpper("world")).

// function toUpper(str) {
//   return str.toUpperCase();
// }
// console.log(toUpper("hello"));
// console.log(toUpper("world"));


// Assignment 3:
// Task: Write a JavaScript function that takes an array of numbers as an argument and returns the average of the numbers.
// Function Name: averageArray
// Requirements:
// The function should take an array of numerical values, arr.
// The function should return the average of the numbers in the array using a loop or the reduce() method.
// Test the function with different inputs (e.g., averageArray([1, 2, 3]), averageArray([5, 5, 5])).

// function averageArray(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }

// console.log(averageArray([1, 2, 3]));
// console.log(averageArray([5, 5, 5]));



// Assignment 4:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all vowels removed.
// Function Name: removeVowels
// Requirements:
// The function should take a string argument, str.
// The function should use a regular expression or a loop to remove all vowels (A, E, I, O, U, a, e, i, o, u) from the string.
// Test the function with different inputs (e.g., removeVowels("hello world"), removeVowels("javascript")).

// function removeVowels(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }
// console.log(removeVowels("hello world"));
// console.log(removeVowels("javascript"));
// console.log(removeVowels("higher secondry school"))


// Assignment 5:
// Task: Write a JavaScript function that takes a number as an argument and returns the factorial of that number.
// Function Name: factorial
// Requirements:
// The function should take a numerical argument, n.
// The function should use a loop or recursion to calculate the factorial of n.
// Test the function with different inputs (e.g., factorial(5), factorial(3)).

// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(5));
// console.log(factorial(3));
// console.log(factorial(9));

// Assignment 6:
// Task: Write a JavaScript function that takes a string as an argument and returns the string with all letters reversed.
// Function Name: reverseString
// Requirements:
// The function should take a string argument, str.
// The function should use a loop or recursion to reverse the letters in the string.
// Test the function with different inputs (e.g., reverseString("hello"), reverseString("world"))

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("hello"));
// console.log(reverseString("world"));
// console.log(reverseString("Adil nawaz khan"));