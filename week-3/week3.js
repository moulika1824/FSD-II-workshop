"use strict";
// WEEK 3 - OBJECT ORIENTED PROGRAMMING IN TYPESCRIPT
// Full Stack Development - 2 Lab
console.log("===== WEEK 3: OOP IN TYPESCRIPT =====");
// --------------------------------------------------
// 1. CLASS WITH PROPERTIES AND METHODS
// 2. CONSTRUCTOR
// 3. PUBLIC, PRIVATE AND PROTECTED
// 4. READONLY AND STATIC MEMBERS
// --------------------------------------------------
class Student {
    // Public property
    studentName;
    // Private property
    marks;
    // Protected property
    department;
    // Readonly property
    rollNumber;
    // Static property
    static collegeName = "Engineering College";
    // Constructor
    constructor(studentName, marks, department, rollNumber) {
        this.studentName = studentName;
        this.marks = marks;
        this.department = department;
        this.rollNumber = rollNumber;
    }
    // Public method
    displayDetails() {
        console.log("Name:", this.studentName);
        console.log("Roll Number:", this.rollNumber);
        console.log("Department:", this.department);
        console.log("Marks:", this.marks);
        console.log("College:", Student.collegeName);
    }
    // Method to access private member
    getMarks() {
        return this.marks;
    }
}
// --------------------------------------------------
// CREATE OBJECT
// --------------------------------------------------
console.log("\n--- 1. Class and Constructor ---");
let student1 = new Student("Moulika", 90, "CSE (AI & ML)", 101);
student1.displayDetails();
// --------------------------------------------------
// PUBLIC MEMBER
// --------------------------------------------------
console.log("\n--- 2. Public Member ---");
console.log("Public Student Name:", student1.studentName);
student1.studentName = "Moulika Anumula";
console.log("Updated Name:", student1.studentName);
// --------------------------------------------------
// PRIVATE MEMBER
// --------------------------------------------------
console.log("\n--- 3. Private Member ---");
console.log("Private Marks accessed using method:", student1.getMarks());
// --------------------------------------------------
// PROTECTED MEMBER USING INHERITANCE
// --------------------------------------------------
console.log("\n--- 4. Protected Member ---");
class AIMLStudent extends Student {
    displayDepartment() {
        // Protected member can be accessed
        // inside a derived class
        console.log("Protected Department:", this.department);
    }
}
let student2 = new AIMLStudent("Anu", 85, "CSE (AI & ML)", 102);
student2.displayDepartment();
// --------------------------------------------------
// READONLY MEMBER
// --------------------------------------------------
console.log("\n--- 5. Readonly Member ---");
console.log("Readonly Roll Number:", student1.rollNumber);
// The following is not allowed:
// student1.rollNumber = 200;
// --------------------------------------------------
// STATIC MEMBER
// --------------------------------------------------
console.log("\n--- 6. Static Member ---");
console.log("Static College Name:", Student.collegeName);
// Static member is accessed using class name
Student.collegeName = "SVECW";
console.log("Updated Static College Name:", Student.collegeName);
// --------------------------------------------------
// METHOD EXAMPLE
// --------------------------------------------------
console.log("\n--- 7. Display Student Details ---");
student2.displayDetails();
console.log("\n===== WEEK 3 COMPLETED SUCCESSFULLY =====");
