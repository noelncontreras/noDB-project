const express = require("express");
const app = express();
const {read, create, remove, edit} = require("./controller/controller");

app.use(express.json());

app.get("/api/games", read);
app.post("/api/game", create);
app.delete("/api/games/:id", remove);
app.put("/api/games/:id", edit);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening live on Port ${PORT}`)
});