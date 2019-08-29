import React from 'react';
import Navbar from './Components/Navbar';
import AddGame from './Components/AddGame';
import GameCard from './Components/GameCard';
import Footerbar from './Components/Footerbar';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <AddGame />
      <GameCard />
      <Footerbar />
    </div>
  );
}

export default App;
