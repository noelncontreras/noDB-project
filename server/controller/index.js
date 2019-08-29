const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const PORT = 5000;
app.listen(PORT, () => console.log(`Listening live on Port ${PORT}`));