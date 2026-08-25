const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

let students = [
    { id: 1, name: "Moulika", branch: "CSE" },
    { id: 2, name: "Ananya", branch: "ECE" }
];

app.get("/", (req, res) => {
    res.json({
        message: "Week 6 REST API is running",
        time: req.requestTime
    });
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.get("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

app.post("/students", (req, res) => {
    const { name, branch } = req.body;

    if (!name || !branch) {
        return res.status(400).json({
            message: "Name and branch are required"
        });
    }

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        branch
    };

    students.push(newStudent);

    res.status(201).json({
        message: "Student created successfully",
        student: newStudent
    });
});

app.put("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    const { name, branch } = req.body;

    if (!name || !branch) {
        return res.status(400).json({
            message: "Name and branch are required"
        });
    }

    student.name = name;
    student.branch = branch;

    res.json({
        message: "Student updated successfully",
        student
    });
});

app.delete("/students/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    const deletedStudent = students.splice(index, 1)[0];

    res.json({
        message: "Student deleted successfully",
        student: deletedStudent
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});