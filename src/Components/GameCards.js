import React from "react";
import CardInfo from "./CardInfo";

export default function GameCards(props) {
    const gamesMapped = props.games.map((game, i) => {
        return (
            <CardInfo game ={game} key={i} removeGame={props.removeGame}/>
        )
    })

    return (
        <div>
            {gamesMapped}
        </div>
    )
}