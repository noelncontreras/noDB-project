import React, { Component } from "react";
import axios from "axios";

export default class CardInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            game: {},
            edit: false
        }
    }
    componentDidMount() {
        this.setState({game: this.props.game})
    }
    
    handleEdit = () => {
        this.setState({edit: true});
    }

    handleChange = e => {
        let gameCopy = {...this.state.game}
        gameCopy[e.target.name] = e.target.value
        this.setState({game: gameCopy})
    }

    handleSubmit = (id) => {
        axios
        .put(`/api/games/${id}`, this.state.game).then(res => {
            this.setState({games: res.data, edit: false})
        })
        .catch(error => alert(`You have an ${error}`))
    }

    handleCancel = () => {
        this.setState({game: this.props.game, edit: false});
    }

        render() {
            let {gameTitle, genre, developer, trailerLink, id} = this.state.game;
            return (
                <section className="gamecard-container">
                    <div className="video-frame">
                        <iframe src={trailerLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="" title="trailer"></iframe>
                    </div>
                    <div className="edit-delete">
                        <button onClick={this.handleEdit} id="edit-button">Edit</button>
                        <br />
                        <button
                            id="delete-button"
                            onClick={() => this.props.removeGame(id)}>Delete</button>
                    </div>
                    {!this.state.edit ?
                    <ul className="game-info">
                        <li>Game Title: {gameTitle}</li>
                        <li>Genre: {genre}</li>
                        <li>Developer: {developer}</li>
                    </ul>
                    : <div>
                        <input name="gameTitle" value={gameTitle} onChange={this.handleChange}/>
                        <input name="genre" value={genre} onChange={this.handleChange}/>
                        <input name="developer" value={developer} onChange={this.handleChange}/>
                        <button onClick={() => this.handleSubmit(id)}>Submit</button>
                        <button onClick={() => this.handleCancel(id)}>Cancel</button>
                    </div>
                    }
                </section>
            )
        }
}