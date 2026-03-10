const express = require("express");
const sequelize = require("./common/models/database");
const defineUser = require("./common/models/user");
const User = defineUser(sequelize);

const app = express();
const PORT = 3000;

app.use(express.json());

sequelize.sync();

const authRoutes = require("./authorization/routes");
app.use("/", authRoutes);

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
