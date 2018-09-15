import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Image from './Components/Image';

class App extends Component {



  render() {
    return (
      <div className='app'>
      <Navbar />
      <header className='header'>
      <img src='/assets/imgs/Pokemon.png' />
      <h3>Click each Pokemon to score points. If you click the same Pokemon twice it's game over.</h3>
      <h3>Can you catch them all?</h3>
      </header>
      <main className='container'>
      <Image src='/assets/imgs/pikachu.jpeg' />
      <Image src='/assets/imgs/bulbasaur.jpeg' />
      <Image src='/assets/imgs/butterfree.jpeg' />
      <Image src='/assets/imgs/charmander.jpeg' />
      <Image src='/assets/imgs/gastly.jpeg' />
      <Image src='/assets/imgs/geodude.jpeg' />
      <Image src='/assets/imgs/hitmonchan.jpeg' />
      <Image src='/assets/imgs/jiggleypuff.jpeg' />
      <Image src='/assets/imgs/magnemite.jpeg' />
      <Image src='/assets/imgs/pidgey.jpeg' />
      <Image src='/assets/imgs/slowpoke.jpeg' />
      <Image src='/assets/imgs/squirtle.jpeg' />
      </main>
      <footer className='footer'>

      </footer>
      </div>
    )
};
};

export default App;
