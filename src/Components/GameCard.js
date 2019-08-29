import React, { Component } from "react";

import './GameCard.css';

export default class GameCard extends Component {
    constructor () {
        super();
        this.state = {
            
        }
    }

    render() {
        return (
            <section className= "gamecard-container">
                <div className= "video-frame">
                    <iframe src="https://www.youtube.com/embed/Gu8X7vM3Avw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" title="trailer"></iframe>
                </div>
                <div className= "edit-delete">
                    <button id= "edit-button">Edit</button>
                    <br />
                    <button id= "delete-button">Delete</button>
                </div>
                <ul className = "game-info">
                    <li>Game Title: Death Stranding</li>
                    <li>Genre: Death Stranding</li>
                    <li>Developer: Death Stranding</li>
                    <li>Trailer Link: Death Stranding</li>
                </ul>
            </section>
        )
    }
}