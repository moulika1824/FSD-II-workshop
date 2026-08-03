// WEEK 4 - CODE ORGANIZATION AND GENERICS
// Full Stack Development - 2 Lab

import { add, multiply } from "./mathUtils";
import { Student } from "./student";

console.log("===== WEEK 4: NAMESPACE, MODULES AND GENERICS =====");


// --------------------------------------------------
// 1. NAMESPACE
// --------------------------------------------------

console.log("\n--- 1. Namespace ---");

namespace College {

    export class Department {

        constructor(public departmentName: string) {}

        displayDepartment(): void {
            console.log(
                "Department:",
                this.departmentName
            );
        }
    }

    export function welcome(): void {
        console.log("Welcome to the College Namespace");
    }
}

College.welcome();

let dept = new College.Department("CSE (AI & ML)");
dept.displayDepartment();


// --------------------------------------------------
// 2. EXPORT AND IMPORT MODULES
// --------------------------------------------------

console.log("\n--- 2. Export and Import Modules ---");

console.log("Addition of 10 and 20:", add(10, 20));

console.log(
    "Multiplication of 5 and 4:",
    multiply(5, 4)
);

let student1 = new Student("Moulika", 101);
student1.display();


// --------------------------------------------------
// 3. GENERIC VARIABLES
// --------------------------------------------------

console.log("\n--- 3. Generic Variables ---");

let numberArray: Array<number> = [10, 20, 30, 40];

let stringArray: Array<string> = [
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

function identity<T>(value: T): T {
    return value;
}

let numberValue = identity<number>(100);
let stringValue = identity<string>("Hello TypeScript");
let booleanValue = identity<boolean>(true);

console.log("Generic Number:", numberValue);
console.log("Generic String:", stringValue);
console.log("Generic Boolean:", booleanValue);


// --------------------------------------------------
// ANOTHER GENERIC FUNCTION
// --------------------------------------------------

function getFirstElement<T>(items: T[]): T {
    return items[0];
}

console.log(
    "First Number:",
    getFirstElement<number>([10, 20, 30])
);

console.log(
    "First String:",
    getFirstElement<string>(["Java", "TypeScript", "Python"])
);


// --------------------------------------------------
// 5. GENERIC CONSTRAINTS
// --------------------------------------------------

console.log("\n--- 5. Generic Constraints ---");

interface HasLength {
    length: number;
}

function displayLength<T extends HasLength>(item: T): T {

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

class DataStorage<T> {

    private data: T[] = [];

    addItem(item: T): void {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }
}

let numberStorage = new DataStorage<number>();

numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);

console.log(
    "Number Storage:",
    numberStorage.getItems()
);

let stringStorage = new DataStorage<string>();

stringStorage.addItem("HTML");
stringStorage.addItem("CSS");
stringStorage.addItem("TypeScript");

console.log(
    "String Storage:",
    stringStorage.getItems()
);


console.log("\n===== WEEK 4 COMPLETED SUCCESSFULLY =====");