// JavaScript Coding Challenge

// This coding challenge is designed to test your understanding of basic JavaScript concepts.
// You should be able to complete this challenge by only referring to the provided curriculum.
// Don't forget to include a statement to log each variable's final value to the console so you can verify that your code works!
// **HINT! To see the output of this code, you can use the integrated terminal in VS Code. Open the terminal (View > Terminal), and then type "node index.js" to run your index.js file and see the outputs of your code! Congrats, btw - this is your first brush with Node.js, the backend, server-side version of JavaScript!

// Instructions:

// 1. Declare a variable named 'firstName' and assign it a string value of your first name.

// 2. Declare a variable named 'age' and assign it a number value of your age.

// 3. Declare a variable named 'isProgrammer' and assign it a boolean value representing whether you are a programmer or not.

// 4. Declare a variable named 'canVote'. This variable should hold a boolean value indicating whether a person of your age is eligible to vote. (In most countries, the voting age is 18.)

// 5. Declare a variable named 'description'. This variable should hold a string that includes your 'firstName', 'age', and whether or not you are a programmer (using the 'isProgrammer' variable).

// 6. Declare two variables named 'num1' and 'num2' and assign them number values. Then declare a third variable named 'sum' and assign it the sum of 'num1' and 'num2'.

// 7. Declare a variable named 'option' and assign it a string value of '1', '2', or '3'. Then declare a variable named 'decision' and assign it a different string value based on the value of 'option'. The options are '1', '2', and '3'. If 'option' is none of these, 'decision' should be 'Invalid option'.

// 8. Declare a variable named 'isAdult' using the ternary operator. The variable should hold a string value of 'Adult' if 'age' is 18 or over, and 'Not Adult' if 'age' is under 18.

// Good luck!

// Do not alter below this line please... Doing so will BREAK automatic grading for your assignment!

export function getFirstName() {
    return firstName;
  }
  let firstName = 'Braydon';
  export function getAge() {
    return age;
  }
  let age = 25;
  export function getIsProgrammer() {
    return isProgrammer true;
  }
  let isProgrammer = 
  export function getCanVote() {
    return canVote;
  }
  let canVote = true;
  export function getDescription() {
    return description;
  }
  let Description = 'Braydon';'25';'isProgrammer'
  export function getNum1() {
    return num1;
  }
  let num1 = 1;
  export function getNum2() {
    return num2;
  }
  let num2 = 2;
  export function getSum() {
    return sum;
  }
  let sum = num1 + num2;
  export function getOption() {
    return option;
  }
  let option = [1, 2, 3];
  let decision;
  if (option === '1') {
      decision = "Option 1 chosen";
  } else if (option === '2') {
      decision = "Option 2 chosen";
  } else if (option === '3') {
      decision = 'Option 3 chosen';
  } else {
      decision = "Invalid Option";
  }
  console.log("Decision", decision);
  export function getDecision() {
    return decision;
  }
  export function getIsAdult() {
    return isAdult;
  }
  let age = 18;
  let message = (age >= 18) ? 'You are an adult' : 'You are not an adult';
  console.log(messsage);