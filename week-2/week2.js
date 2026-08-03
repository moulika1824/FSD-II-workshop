"use strict";
// WEEK 2 - FUNCTIONS IN TYPESCRIPT
// Full Stack Development - 2 Lab
console.log("===== WEEK 2: FUNCTIONS IN TYPESCRIPT =====");
// --------------------------------------------------
// 1. FUNCTION WITH PARAMETER TYPES AND RETURN TYPE
// --------------------------------------------------
console.log("\n--- 1. Parameter Types and Return Types ---");
function add(a, b) {
    return a + b;
}
let result = add(10, 20);
console.log("First Number: 10");
console.log("Second Number: 20");
console.log("Sum:", result);
// --------------------------------------------------
// 2. OPTIONAL PARAMETER
// --------------------------------------------------
console.log("\n--- 2. Optional Parameter ---");
function displayStudent(name, age) {
    console.log("Student Name:", name);
    if (age !== undefined) {
        console.log("Age:", age);
    }
    else {
        console.log("Age: Not Provided");
    }
}
displayStudent("Moulika", 20);
displayStudent("Anu");
// --------------------------------------------------
// 3. DEFAULT PARAMETER
// --------------------------------------------------
console.log("\n--- 3. Default Parameter ---");
function greet(name, message = "Welcome to TypeScript") {
    console.log(name + ", " + message);
}
greet("Moulika");
greet("Moulika", "Have a great day!");
// --------------------------------------------------
// 4. ARROW FUNCTION
// --------------------------------------------------
console.log("\n--- 4. Arrow Function ---");
const multiply = (a, b) => {
    return a * b;
};
console.log("Multiplication of 5 and 4:", multiply(5, 4));
// --------------------------------------------------
// 5. REST PARAMETERS
// --------------------------------------------------
console.log("\n--- 5. REST Parameters ---");
function calculateTotal(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total = total + number;
    }
    return total;
}
console.log("Total of 10, 20, 30 and 40:", calculateTotal(10, 20, 30, 40));
// --------------------------------------------------
// 6. TRADITIONAL FUNCTION
// --------------------------------------------------
console.log("\n--- 6. Traditional Function ---");
function square(number) {
    return number * number;
}
console.log("Square using traditional function:", square(6));
// --------------------------------------------------
// 7. CONVERT TRADITIONAL FUNCTION TO ARROW FUNCTION
// --------------------------------------------------
console.log("\n--- 7. Converted Arrow Function ---");
const squareArrow = (number) => {
    return number * number;
};
console.log("Square using arrow function:", squareArrow(6));
// --------------------------------------------------
// 8. ANOTHER ARROW FUNCTION EXAMPLE
// --------------------------------------------------
console.log("\n--- 8. Student Result using Arrow Function ---");
const studentResult = (name, marks) => {
    if (marks >= 40) {
        return name + " has Passed";
    }
    else {
        return name + " has Failed";
    }
};
console.log(studentResult("Moulika", 85));
console.log("\n===== WEEK 2 COMPLETED SUCCESSFULLY =====");
