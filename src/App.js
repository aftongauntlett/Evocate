import React, { useState }from "react";
import Card from "./components/Card/index";
import "./App.css";

function App() {
  const [flipped, setFlipped] = useState([])

  const handleClick = (id) => setFlipped([ ...flipped, id])
  
  return (
  <div className="App">
    
    <h2>Memory Game</h2>
      <Card
        id={1}
        width={100}
        height={100}
        back={require (`./imgs/cat.jpeg`)}
        front={require (`./imgs/cat2.jpeg`)}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
  </div>
  )
}

export default App;
