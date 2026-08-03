"use strict";
// WEEK 1 - TYPESCRIPT BASICS
// Full Stack Development - 2 Lab
console.log("===== WEEK 1: TYPESCRIPT BASICS =====");
// --------------------------------------------------
// 1. SIMPLE TYPES
// number, string and boolean
// --------------------------------------------------
console.log("\n--- 1. Simple Types ---");
let studentName = "Moulika";
let age = 20;
let marks = 92.5;
let isStudent = true;
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Marks:", marks);
console.log("Is Student:", isStudent);
// --------------------------------------------------
// 2. SPECIAL TYPES
// any, unknown and void
// --------------------------------------------------
console.log("\n--- 2. Special Types ---");
// any type
let value = "Hello TypeScript";
console.log("Any value:", value);
value = 100;
console.log("Any value after changing:", value);
// unknown type
let data = "TypeScript Programming";
if (typeof data === "string") {
    console.log("Unknown value:", data);
    console.log("Length of unknown string:", data.length);
}
// void type
function displayMessage() {
    console.log("This function demonstrates the void type.");
}
displayMessage();
// --------------------------------------------------
// 3. TYPE ANNOTATIONS
// --------------------------------------------------
console.log("\n--- 3. Type Annotations ---");
let collegeName = "Engineering College";
let semester = 5;
let isPassed = true;
console.log("College:", collegeName);
console.log("Semester:", semester);
console.log("Passed:", isPassed);
// --------------------------------------------------
// 4. SIMPLE PROGRAM USING TYPE ANNOTATIONS
// Addition of two numbers
// --------------------------------------------------
console.log("\n--- 4. Addition Program ---");
let num1 = 25;
let num2 = 15;
let sum = num1 + num2;
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Sum:", sum);
// --------------------------------------------------
// 5. FUNCTION WITH TYPE ANNOTATIONS
// --------------------------------------------------
console.log("\n--- 5. Function with Type Annotations ---");
function calculateArea(length, breadth) {
    return length * breadth;
}
let area = calculateArea(10, 5);
console.log("Length: 10");
console.log("Breadth: 5");
console.log("Area of Rectangle:", area);
// --------------------------------------------------
// 6. STUDENT DETAILS PROGRAM
// --------------------------------------------------
console.log("\n--- 6. Student Details ---");
let rollNumber = 101;
let name = "Moulika";
let department = "CSE (AI & ML)";
let active = true;
console.log("Roll Number:", rollNumber);
console.log("Name:", name);
console.log("Department:", department);
console.log("Active Student:", active);
console.log("\n===== WEEK 1 COMPLETED SUCCESSFULLY =====");
