const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/register", (req, res) => {
    const { name, phone, email, event, date } = req.body;

    if (!name || !phone || !email || !event || !date) {
        return res.json({
            message: "Please fill all fields"
        });
    }

    console.log("New Registration:");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Event:", event);
    console.log("Date:", date);

    res.json({
        message: "Registration Successful!",
        name: name,
        phone: phone,
        email: email,
        event: event,
        date: date
    });
});

app.listen(3000, () => {
    console.log("Registration Microservice running on http://localhost:3000");
});