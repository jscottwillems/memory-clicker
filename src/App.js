import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Image from './Components/Image';
import pokemon from "./pokemon.json";

class App extends Component {
  state = {
    score: 0,
    hiScore: 0,
    pokemon,
    message: "Gotta Click 'em All",
    clicked: []
  }

  countHandler = (id) => {
    if (this.state.clicked.includes(id) && this.state.hiScore !== 12) {
      this.setState({
          score: 0,
          message: "All Your Pokemon Have Fainted.",
          clicked: []
        });
    } else {
      this.setState({
        message: "You Caught a Pokemon!",
        clicked: [...this.state.clicked, id]
      });
      this.scoreHandler();
      this.hiScoreHandler();
      this.resetGame();
    }
  }

  hiScoreHandler = () => {
    if (this.state.score >= this.state.hiScore){
      this.setState({
        hiScore: this.state.hiScore + 1
      })
    } else {

    }
  }

  scoreHandler = () => {
    if (this.state.score < 11) {
      this.setState({
        score: this.state.score + 1
      })
    } else {
      this.setState({ 
        score: this.state.score + 1,
        message: "You're a Pokemon Master!"
      })
    }
  }

  resetGame = () => {
    if (this.state.clicked.length > 11) {
      this.setState({
        score: 0,
        hiScore: 0,
        pokemon,
        message: "Gotta Click 'em All",
        clicked: []
      })
    } else {

    }
  }

  shuffleHandler = () => {
    const newPokemon = this.state.pokemon.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    this.setState({
      pokemon: newPokemon
    })
  }

  clickHandler = (id) => {
    this.countHandler(id);
    this.shuffleHandler();
  }


  render() {
    return (
      <div className='app'>
      <Navbar message={this.state.message} score={this.state.score} hiScore={this.state.hiScore} />
      <header className='header'>
      <img src='/assets/imgs/Pokemon.png' />
      <h3>Click each Pokemon to score points. If you click the same Pokemon twice it's game over.</h3>
      <h3>Can you catch them all?</h3>
      </header>
      <main className='container'>
      {this.state.pokemon.map(pokemon => (
        <Image
        src={pokemon.image}
        clicked={this.clickHandler}
        id={pokemon.id}
        key={pokemon.id}/>
      ))}
      </main>
      <footer className='footer'>

      </footer>
      </div>
    )
};
};

export default App;
