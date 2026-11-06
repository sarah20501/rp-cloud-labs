
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Serve front-end files from the public folder
app.use(express.static(path.join(__dirname, "../public")));

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to RP-Cloud Labs Tool-Session Service"
    });
});

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "UP",
        service: "Tool-Session Service"
    });
});

// Request a tool session
app.post("/sessions", (req, res) => {
    const { studentId, college, tool } = req.body;

    if (!studentId || !college || !tool) {
        return res.status(400).json({
            message: "Please provide studentId, college, and tool"
        });
    }

    res.status(201).json({
        message: "Request submitted successfully",
        status: "PENDING",
        studentId,
        college,
        tool
    });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`API running on port ${PORT}`);
});
