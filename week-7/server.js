const express = require("express");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {
        title: "Week 7 - Server Side Rendering",
        message: "Welcome to Server Side Rendering!",
        result: null,
        error: null
    });
});

app.post("/submit", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;

    if (!name || !email) {
        return res.render("index", {
            title: "Week 7 - Server Side Rendering",
            message: "Please correct the errors",
            result: null,
            error: "Name and Email are required."
        });
    }

    res.render("index", {
        title: "Week 7 - Server Side Rendering",
        message: "Form Submitted Successfully!",
        result: `Name: ${name}, Email: ${email}`,
        error: null
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});