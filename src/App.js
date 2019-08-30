import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import AddGames from "./Components/AddGames";
import GameCards from "./Components/GameCards";
import Footerbar from "./Components/Footerbar";

import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      games: []
    }
  }

  updateGames = gamesArr => {
    this.setState({games: gamesArr})
  }

  render() {
    return (
      <div>
        <Navbar />
        <AddGames updateGames = {this.updateGames} />
        <GameCards games = {this.state.games} />
        <Footerbar />
      </div>
    );
  }

}
