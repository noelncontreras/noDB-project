import React, { Component } from 'react';
import axios from "axios";

import "./AddGame.css";

export default class AddGame extends Component {
    constructor() {
        super();
        this.state = {
            games: [],
            gameTitle: "",
            genre: "",
            developer: "",
            trailerLink: ""
        }
    }
    componentDidMount() {

    }
    
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleClick = () => {
        axios.post("/api/game", {
            gameTitle: this.state.gameTitle,
            genre: this.state.genre,
            developer: this.state.developer,
            trailerLink: this.state.trailerLink
        }).then(response => {
            this.setState({games: response.data})
        })
    }

    render () {
        return (
            <section className= "add-container">
                <div className= "title-genre">
                    <label>Game Title:</label>
                    <input 
                    name="gameTitle"
                    placeholder = "Enter game title" 
                    onChange={this.handleChange}/>
                    <br />
                    <label>Genre:</label>
                    <input 
                    name="genre"
                    placeholder = "Enter genre of game" 
                    onChange={this.handleChange}/>
                </div>
                <div className= "add-box">
                    <button 
                    id="add-button"
                    onClick={this.handleClick}>Add Game</button>
                </div>
                <div className= "developer-trailer">
                    <label>Developer:</label>
                    <input 
                    name="developer"
                    placeholder = "Enter game developer" 
                    onChange={this.handleChange}/>
                    <br />
                    <label>Trailer Link:</label>
                    <input 
                    name="gameTrailer"
                    placeholder = "Enter game trailer URL" 
                    onChange={this.handleChange}/>
                </div>
            </section>
        )
    }
}