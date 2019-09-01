let games = [
    {
        gameTitle: "Death Stranding",
        genre: "Action",
        developer: "Kojima Productions",
        trailerLink: "https://www.youtube.com/embed/Gu8X7vM3Avw",
        id: 0
    }
]
let id = 1;

module.exports = {
    read: (req, res) => {
        res.status(200).json(games);
    },
    create: (req, res) => {
        const {gameTitle, genre, developer, trailerLink} = req.body;
        let gameObj = {
            gameTitle,
            genre,
            developer,
            trailerLink,
            id
        }
        games.push(gameObj);
        id++;
        res.status(201).json(games);
    },
    remove: (req, res) => {
        let deleteId = req.params.id;
        console.log(deleteId)
        let gameIndex = games.findIndex(game => game.id == deleteId);
        console.log(gameIndex)
        games.splice(gameIndex, 1);
        res.status(200).send(games);
    }
}