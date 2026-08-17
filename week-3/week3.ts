export {}
console.log("===== WEEK 3: OOP IN TYPESCRIPT =====");
class Student {
    public studentName: string;
    private marks: number;
    protected department: string;
    readonly rollNumber: number;
    static collegeName: string = "Engineering College";
    constructor(
        studentName: string,
        marks: number,
        department: string,
        rollNumber: number
    ) {
        this.studentName = studentName;
        this.marks = marks;
        this.department = department;
        this.rollNumber = rollNumber;
    }
    public displayDetails(): void {
        console.log("Name:", this.studentName);
        console.log("Roll Number:", this.rollNumber);
        console.log("Department:", this.department);
        console.log("Marks:", this.marks);
        console.log("College:", Student.collegeName);
    }
    public getMarks(): number {
        return this.marks;
    }
}
console.log("\n--- 1. Class and Constructor ---");
let student1 = new Student(
    "Moulika",
    90,
    "CSE (AI & ML)",
    101
);
student1.displayDetails();
console.log("\n--- 2. Public Member ---");
console.log("Public Student Name:", student1.studentName);
student1.studentName = "Moulika Anumula";
console.log("Updated Name:", student1.studentName);
console.log("\n--- 3. Private Member ---");
console.log(
    "Private Marks accessed using method:",
    student1.getMarks()
);
console.log("\n--- 4. Protected Member ---");
class AIMLStudent extends Student {
    public displayDepartment(): void {
        console.log(
            "Protected Department:",
            this.department
        );
    }
}
let student2 = new AIMLStudent(
    "Anu",
    85,
    "CSE (AI & ML)",
    102
);
student2.displayDepartment();
console.log("\n--- 5. Readonly Member ---");
console.log(
    "Readonly Roll Number:",
    student1.rollNumber
);
console.log("\n--- 6. Static Member ---");
console.log(
    "Static College Name:",
    Student.collegeName
);
Student.collegeName = "SVECW";
console.log(
    "Updated Static College Name:",
    Student.collegeName
);
console.log("\n--- 7. Display Student Details ---");
student2.displayDetails();
console.log("\n===== WEEK 3 COMPLETED SUCCESSFULLY =====");
