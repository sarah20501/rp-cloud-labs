const express = require("express");

const app = express();

app.use(express.json());

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

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`API running on port ${PORT}`);
});