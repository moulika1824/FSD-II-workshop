"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    name;
    rollNumber;
    constructor(name, rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
    display() {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNumber);
    }
}
exports.Student = Student;
