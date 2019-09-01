let games = [
    {}
]
let id = 0;

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
        console.log(id)
        let gameIndex = games.findIndex(game => game.id == deleteId);
        console.log(gameIndex)
        games.splice(gameIndex, 1);
        console.log(games)
        res.status(200).send(games);
    },
    edit: (req, res) => {
        let {id} = req.params;
        let gameIndex = games.findIndex(game => game.id == id);
        games.splice(gameIndex, 1)
        games.push(req.body)
        res.status(200).json(games)
    }
}