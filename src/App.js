import React, { useState, useEffect}from "react";
import Board from "./components/board";
import "./App.css";

import initializeDeck from "./deck"

function App() {

  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(()=> {
    setCards(initializeDeck())
  },[])
  

  const handleClick = (id) => setFlipped([ ...flipped, id])
  
  return (
  <div className="App">

    
    <h2>Memory Game</h2>
    <Board
      cards={cards} flipped={flipped} handleClick={handleClick}/>

  </div>
  )
}

export default App;
