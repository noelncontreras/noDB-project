import React, { Component } from 'react';
import axios from "axios";

import "./AddGames.css";

export default class AddGames extends Component {
    constructor() {
        super();
        this.state = {
            gameTitle: "",
            genre: "",
            developer: "",
            trailerLink: ""
        }
    }

    componentDidMount() {
        axios
            .get("/api/games")
            .then(response => this.props.updateGames(response.data))
            .catch(error => alert(`You have an ${error}`))
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleClick = () => {
        const newGame = this.state;
        axios
            .post("/api/game", newGame)
            .then(response => {
                this.props.updateGames(response.data)
            })  
            .catch(err => {
                this.setState({error: "something went wrong"})
            })
    }

    render () {
        return (
            <section className= "add-container">
                <div className="title-genre">
                    <label>Game Title:</label>
                    <input
                        name="gameTitle"
                        placeholder="Enter game title"
                        onChange={this.handleChange} />
                    <br />
                    <label>Genre:</label>
                    <input
                        name="genre"
                        placeholder="Enter genre of game"
                        onChange={this.handleChange} />
                </div>
                <div className="add-box">
                    <button
                        id="add-button"
                        onClick={this.handleClick}>Add Game</button>
                </div>
                <div className="developer-trailer">
                    <label>Developer:</label>
                    <input
                        name="developer"
                        placeholder="Enter game developer"
                        onChange={this.handleChange} />
                    <br />
                    <label>Trailer Link:</label>
                    <input
                        name="trailerLink"
                        placeholder="Enter game trailer URL"
                        onChange={this.handleChange} />
                </div>
            </section>
        )
    }
}