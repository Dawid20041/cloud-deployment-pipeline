const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from Cloud App");
})

app.get("/health", (req, res) => {
    res.send("ok");
});

app.get("/time", (req, res) => {
    res.send({ time: new Date() });
});

app.get("/info", (req, res) => {
    res.send({
        app: "Cloud Node App",
        version: "1.0.0",
        description: "A simple Node.js app running in the cloud"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});