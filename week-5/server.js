// WEEK 5 - EXPRESS JS
// Full Stack Development - 2 Lab

const express = require("express");

const app = express();
const PORT = 3000;


// --------------------------------------------------
// 1. BASIC EXPRESS SERVER
// --------------------------------------------------

app.get("/", (req, res) => {
    res.send(`
        <h1>Week 5 - ExpressJS</h1>
        <h2>Express Server is Running Successfully!</h2>
        <p>Full Stack Development - 2 Lab</p>
    `);
});


// --------------------------------------------------
// 2. BASIC ROUTES
// --------------------------------------------------

app.get("/about", (req, res) => {
    res.send("<h1>About Page</h1><p>This is a basic Express route.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Page</h1><p>Welcome to the Contact Page.</p>");
});

app.get("/student", (req, res) => {
    res.json({
        name: "Moulika",
        rollNumber: 101,
        department: "CSE (AI & ML)"
    });
});


// --------------------------------------------------
// 3. ROUTE PARAMETERS
// Example: /student/101
// --------------------------------------------------

app.get("/student/:id", (req, res) => {

    const studentId = req.params.id;

    res.send(`
        <h1>Student Details</h1>
        <p>Student ID: ${studentId}</p>
    `);
});


// --------------------------------------------------
// 4. QUERY PARAMETERS
// Example: /search?name=Moulika&course=FSD
// --------------------------------------------------

app.get("/search", (req, res) => {

    const name = req.query.name || "Not Provided";
    const course = req.query.course || "Not Provided";

    res.send(`
        <h1>Query Parameters</h1>
        <p>Name: ${name}</p>
        <p>Course: ${course}</p>
    `);
});


// --------------------------------------------------
// 5. DYNAMIC URL
// Example: /course/FSD/week/5
// --------------------------------------------------

app.get("/course/:courseName/week/:weekNumber", (req, res) => {

    const courseName = req.params.courseName;
    const weekNumber = req.params.weekNumber;

    res.send(`
        <h1>Dynamic URL</h1>
        <p>Course: ${courseName}</p>
        <p>Week: ${weekNumber}</p>
    `);
});


// --------------------------------------------------
// START SERVER
// --------------------------------------------------

app.listen(PORT, () => {

    console.log("========================================");
    console.log("WEEK 5 - EXPRESS SERVER");
    console.log("========================================");
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("Week 5 completed successfully!");
});