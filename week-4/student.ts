// WEEK 4 - CLASS EXPORT EXAMPLE

export class Student {
    constructor(
        public name: string,
        public rollNumber: number
    ) {}

    display(): void {
        console.log("Student Name:", this.name);
        console.log("Roll Number:", this.rollNumber);
    }
}