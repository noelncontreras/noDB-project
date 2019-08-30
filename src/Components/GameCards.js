import React from "react";
import CardInfo from "./CardInfo";
import "./GameCards.css";

export default function GameCards(props) {
    const gamesMapped = props.games.map((game, i) => {
        return (
            <CardInfo game ={game} key={i} />
        )
    })

    return (
        <div>
            {gamesMapped}
        </div>
    )
}