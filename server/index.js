const express = require("express");
const app = express();
const axios = require("axios");
const {read} = require("./controller/controller");

app.use(express.json());

app.get("/api/games", read);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening live on Port ${PORT}`)
});