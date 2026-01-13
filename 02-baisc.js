// JavaScript Practice Code

// 1. Variables
const userId = 101;
let userName = "Amit";
let userEmail = "amit@gmail.com";
let isLoggedIn = true;

console.log("User ID:", userId);
console.log("User Name:", userName);
console.log("User Email:", userEmail);
console.log("Logged In:", isLoggedIn);

// 2. Function
function greetUser(name) {
  return `Hello ${name}, welcome to JavaScript!`;
}

console.log(greetUser(userName));

// 3. Array
const fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log("Fruits:", fruits);
console.log("First Fruit:", fruits[0]);

// 4. Object
const user = {
  id: userId,
  name: userName,
  email: userEmail,
  loggedIn: isLoggedIn,
};

console.log("User Object:", user);

// 5. Loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// 6. If-Else
let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
} else {
  console.log("You are not eligible to vote");
}

// 7. Simple Calculator
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}

console.log("Add:", add(10, 5));
console.log("Subtract:", subtract(10, 5));
