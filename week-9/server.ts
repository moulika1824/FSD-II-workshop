import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Student from "./model/Student";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("MONGO_URI is not defined");
}

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.log("MongoDB connection error:", error);
  });

app.get("/", (req: Request, res: Response) => {
  res.send("Student REST API is running");
});

app.get("/students", async (req: Request, res: Response) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students" });
  }
});

app.get("/students/:id", async (req: Request, res: Response) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student" });
  }
});

app.post("/students", async (req: Request, res: Response) => {
  try {
    const { name, email, age } = req.body;

    const student = new Student({
      name,
      email,
      age
    });

    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    res.status(400).json({ message: "Error creating student" });
  }
});

app.put("/students/:id", async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(400).json({ message: "Error updating student" });
  }
});

app.delete("/students/:id", async (req: Request, res: Response) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: "Error deleting student" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});