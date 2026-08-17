console.log("===== WEEK 1: TYPESCRIPT BASICS =====");
console.log("\n--- 1. Simple Types ---");
let studentName: string = "Moulika";
let age: number = 20;
let marks: number = 92.5;
let isStudent: boolean = true;
console.log("Student Name:", studentName);
console.log("Age:", age);
console.log("Marks:", marks);
console.log("Is Student:", isStudent);
console.log("\n--- 2. Special Types ---");
let value: any = "Hello TypeScript";
console.log("Any value:", value);
value = 100;
console.log("Any value after changing:", value);
let data: unknown = "TypeScript Programming";
if (typeof data === "string") {
    console.log("Unknown value:", data);
    console.log("Length of unknown string:", data.length);
}
function displayMessage(): void {
    console.log("This function demonstrates the void type.");
}
displayMessage();
console.log("\n--- 3. Type Annotations ---");
let collegeName: string = "Engineering College";
let semester: number = 5;
let isPassed: boolean = true;
console.log("College:", collegeName);
console.log("Semester:", semester);
console.log("Passed:", isPassed);
console.log("\n--- 4. Addition Program ---");
let num1: number = 25;
let num2: number = 15;
let sum: number = num1 + num2;
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Sum:", sum);
console.log("\n--- 5. Function with Type Annotations ---");
function calculateArea(length: number, breadth: number): number {
    return length * breadth;
}
let area: number = calculateArea(10, 5);
console.log("Length: 10");
console.log("Breadth: 5");
console.log("Area of Rectangle:", area);
console.log("\n--- 6. Student Details ---");
let rollNumber: number = 101;
let studentFullName: string = "Moulika";
let department: string = "CSE (AI & ML)";
let active: boolean = true;
console.log("Roll Number:", rollNumber);
console.log("Name:", studentFullName);
console.log("Department:", department);
console.log("Active Student:", active);
console.log("\n===== WEEK 1 COMPLETED SUCCESSFULLY =====");
