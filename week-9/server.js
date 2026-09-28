"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const Student_1 = __importDefault(require("./model/Student"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error("MONGO_URI is not defined");
}
mongoose_1.default.connect(MONGO_URI)
    .then(() => {
    console.log("MongoDB connected");
})
    .catch((error) => {
    console.log("MongoDB connection error:", error);
});
app.get("/", (req, res) => {
    res.send("Student REST API is running");
});
app.get("/students", async (req, res) => {
    try {
        const students = await Student_1.default.find();
        res.json(students);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching students" });
    }
});
app.get("/students/:id", async (req, res) => {
    try {
        const student = await Student_1.default.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching student" });
    }
});
app.post("/students", async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const student = new Student_1.default({
            name,
            email,
            age
        });
        const savedStudent = await student.save();
        res.status(201).json(savedStudent);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating student" });
    }
});
app.put("/students/:id", async (req, res) => {
    try {
        const student = await Student_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json(student);
    }
    catch (error) {
        res.status(400).json({ message: "Error updating student" });
    }
});
app.delete("/students/:id", async (req, res) => {
    try {
        const student = await Student_1.default.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.json({ message: "Student deleted successfully" });
    }
    catch (error) {
        res.status(400).json({ message: "Error deleting student" });
    }
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
