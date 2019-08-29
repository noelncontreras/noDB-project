import React, { Component } from 'react';
import axios from "axios";

import "./AddGame.css";

export default class AddGame extends Component {
    constructor() {
        super();
        this.state = {
            games: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:5000/api/games")
        .then(response => {this.setState({games: response.data})
        .catch(err => console.log(err))
        })
    }


    render () {
        return (
            <section className= "add-container">
                <div className= "title-genre">
                    <label>Game Title:</label>
                    <input placeholder = "Enter game title" />
                    <br />
                    <label>Genre:</label>
                    <input placeholder = "Enter genre of game" />
                </div>
                <div className= "add-box">
                    <button id="add-button">Add Game</button>
                </div>
                <div className= "developer-trailer">
                    <label>Developer:</label>
                    <input placeholder = "Enter game developer" />
                    <br />
                    <label>Trailer Link:</label>
                    <input placeholder = "Enter game trailer URL" />
                </div>
            </section>
        )
    }
}