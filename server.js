const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("🚀 Automated Deployment Project is Running!");
});

app.get("/health", (req, res) => {
    res.send("Application is Healthy");
});

app.listen(3000, "0.0.0.0", () => {
    console.log("Application running on port 3000");
});
