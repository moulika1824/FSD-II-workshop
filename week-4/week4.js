"use strict";
// WEEK 4 - CODE ORGANIZATION AND GENERICS
// Full Stack Development - 2 Lab
Object.defineProperty(exports, "__esModule", { value: true });
const mathUtils_1 = require("./mathUtils");
const student_1 = require("./student");
console.log("===== WEEK 4: NAMESPACE, MODULES AND GENERICS =====");
// --------------------------------------------------
// 1. NAMESPACE
// --------------------------------------------------
console.log("\n--- 1. Namespace ---");
var College;
(function (College) {
    class Department {
        departmentName;
        constructor(departmentName) {
            this.departmentName = departmentName;
        }
        displayDepartment() {
            console.log("Department:", this.departmentName);
        }
    }
    College.Department = Department;
    function welcome() {
        console.log("Welcome to the College Namespace");
    }
    College.welcome = welcome;
})(College || (College = {}));
College.welcome();
let dept = new College.Department("CSE (AI & ML)");
dept.displayDepartment();
// --------------------------------------------------
// 2. EXPORT AND IMPORT MODULES
// --------------------------------------------------
console.log("\n--- 2. Export and Import Modules ---");
console.log("Addition of 10 and 20:", (0, mathUtils_1.add)(10, 20));
console.log("Multiplication of 5 and 4:", (0, mathUtils_1.multiply)(5, 4));
let student1 = new student_1.Student("Moulika", 101);
student1.display();
// --------------------------------------------------
// 3. GENERIC VARIABLES
// --------------------------------------------------
console.log("\n--- 3. Generic Variables ---");
let numberArray = [10, 20, 30, 40];
let stringArray = [
    "TypeScript",
    "NodeJS",
    "ExpressJS"
];
console.log("Generic Number Array:", numberArray);
console.log("Generic String Array:", stringArray);
// --------------------------------------------------
// 4. GENERIC FUNCTION
// --------------------------------------------------
console.log("\n--- 4. Generic Function ---");
function identity(value) {
    return value;
}
let numberValue = identity(100);
let stringValue = identity("Hello TypeScript");
let booleanValue = identity(true);
console.log("Generic Number:", numberValue);
console.log("Generic String:", stringValue);
console.log("Generic Boolean:", booleanValue);
// --------------------------------------------------
// ANOTHER GENERIC FUNCTION
// --------------------------------------------------
function getFirstElement(items) {
    return items[0];
}
console.log("First Number:", getFirstElement([10, 20, 30]));
console.log("First String:", getFirstElement(["Java", "TypeScript", "Python"]));
// --------------------------------------------------
// 5. GENERIC CONSTRAINTS
// --------------------------------------------------
console.log("\n--- 5. Generic Constraints ---");
function displayLength(item) {
    console.log("Value:", item);
    console.log("Length:", item.length);
    return item;
}
displayLength("TypeScript");
displayLength([10, 20, 30, 40, 50]);
// --------------------------------------------------
// GENERIC CLASS EXAMPLE
// --------------------------------------------------
console.log("\n--- 6. Generic Class ---");
class DataStorage {
    data = [];
    addItem(item) {
        this.data.push(item);
    }
    getItems() {
        return this.data;
    }
}
let numberStorage = new DataStorage();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
console.log("Number Storage:", numberStorage.getItems());
let stringStorage = new DataStorage();
stringStorage.addItem("HTML");
stringStorage.addItem("CSS");
stringStorage.addItem("TypeScript");
console.log("String Storage:", stringStorage.getItems());
console.log("\n===== WEEK 4 COMPLETED SUCCESSFULLY =====");
