import React, { useState, useEffect } from "react";
import Card from "../Card";
import "./Board.css";
import Timer from '../views/gamePage/timer'


const Board = (props) => {
  const [cards, setCards] = useState(props.cards);
  const [cardCount, setCardCount] = useState(props.cardCount);
  const [finalTime, setTime] = useState([]);

  const [checkers, setCheckers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completed, setCompleted] = useState([]);
  const onCardClick = (card) => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return;
    const newCheckers = [...checkers, card];
    setCheckers(newCheckers);
    const cardsInCheckersMatched = validateCheckers(newCheckers);
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type]);
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000);
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 && checkers[0].type === checkers[1].type;
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id;
    }
    function checkersFull(checkers) {
      return checkers.length === 2;
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([]);
      }, time);
    }
  };
  const setFinalTime = function(time) {
    setTime( time )
  };

  useEffect(() => {
    if (cards && cards.length > 0) {
      const newCards = [];
      cards.forEach((card) => {
        const newCard = {
          ...card,
          flipped:
            checkers.findIndex((c) => c.id === card.id) !== -1 ||
            completed.includes(card.type),
        };
        newCards.push(newCard);
      });
      console.log(newCards)

      setCards(newCards);
    }
    // eslint-disable-next-line
  }, [checkers, completed]);

  
  return (
    <div className="d-flex justify-content-center">
      {/* {loading && (
        <div className="spinner">
          <div>
            <img src={spinner} />
          </div>
          <span>Loading game...</span>
        </div>
      )} */}

      {loading && (
        <>
          <Timer running={completed.length != cardCount/2} setFinalTime={setFinalTime.bind(this)} />
      final time   {finalTime} total cards: {cardCount}: completed sets:{completed.length}
          {/* <div className="statistics">
            <span>Turns: {turns}</span>
            <span>Pairs: {pairsMatched} of {pairs}</span>

            {pairsMatched === pairs && (
              <button onClick={resetGame}>New game</button>
            )}
          </div> */}
          <div className="row">
            {cards && cards.length > 0 && cards.map((card) => (
              <div className="col-sm-4 col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center my-5">
                <Card {...card} onClick={onCardClick(card)} key={card.id} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
