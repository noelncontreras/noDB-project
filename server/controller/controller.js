let games = [
    {
        gameTitle: "Death Stranding",
        genre: "Action",
        developer: "Kojima Productions",
        trailerLink: "https://www.youtube.com/embed/Gu8X7vM3Avw"
    }
]
let id = 0;

module.exports = {
    read: (req, res) => {
        res.status(200).json(games);
    }
}