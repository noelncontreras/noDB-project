import React from "react";

export default function CardInfo(props) {

        return (
            <section key={props.i} className="gamecard-container">
                <div className="video-frame">
                    <iframe src={props.game.trailerLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" title="trailer"></iframe>
                </div>
                <div className="edit-delete">
                    <button id="edit-button">Edit</button>
                    <br />
                    <button id="delete-button">Delete</button>
                </div>
                <ul className="game-info">
                    <li>Game Title: {props.game.gameTitle}</li>
                    <li>Genre: {props.game.genre}</li>
                    <li>Developer: {props.game.developer}</li>
                </ul>
            </section>
        )
}