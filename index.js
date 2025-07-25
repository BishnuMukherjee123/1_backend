require('dotenv').config()
const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("bishnumukherjee.com")
});

app.get("/login", (req, res) => {
    res.send('<h1>Hello, This is the Backend first Video from chai with code</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
