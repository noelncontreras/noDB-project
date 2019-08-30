import React from "react";
import './GameCards.css';

export default function GameCards(props) {

    const gamesMapped = props.games.map((game, i) => {
        return (
            <section key={i} className="gamecard-container">
                <div className="video-frame">
                    <iframe src={game.trailerLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" title="trailer"></iframe>
                </div>
                <div className="edit-delete">
                    <button id="edit-button">Edit</button>
                    <br />
                    <button id="delete-button">Delete</button>
                </div>
                <ul className="game-info">
                    <li>Game Title: {game.gameTitle}</li>
                    <li>Genre: {game.genre}</li>
                    <li>Developer: {game.developer}</li>
                </ul>
            </section>
        )
    })

    return (
        <div>
            {gamesMapped}
        </div>
    )
}