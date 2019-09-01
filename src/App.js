import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import AddGames from "./Components/AddGames";
import GameCards from "./Components/GameCards";
import Footerbar from "./Components/Footerbar";
import axios from "axios";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }

  updateGames = gamesArr => {
    console.log(gamesArr)
    this.setState({games: gamesArr})
  }

  removeGame = (id) => {
    axios
    .delete(`/api/games/:${id}`)
    .then(response => {
        this.setState({games: response.data})
    })
}

  render() {
    return (
      <div>
        <Navbar />
        <AddGames updateGames = {this.updateGames} />
        <GameCards games = {this.state.games} removeGame={this.removeGame} />
        <Footerbar />
      </div>
    );
  }

}
