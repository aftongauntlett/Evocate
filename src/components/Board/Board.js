import React, { useState, useEffect } from 'react'
import Card from '../Card'
import './Board.css'

const Board = props => {
  const [cards, setCards] = useState(props.cards)
  const [checkers, setCheckers] = useState([])
  const [completed, setCompleted] = useState([])
  const onCardClick = card => () => {
    if (checkersFull(checkers) || cardAlreadyInCheckers(checkers, card)) return
    const newCheckers = [...checkers, card]
    setCheckers(newCheckers)
    const cardsInCheckersMatched = validateCheckers(newCheckers)
    if (cardsInCheckersMatched) {
      setCompleted([...completed, newCheckers[0].type])
    }
    if (checkersFull(newCheckers)) {
      resetCheckersAfter(1000)
    }
    function validateCheckers(checkers) {
      return checkers.length === 2 &&
        checkers[0].type === checkers[1].type
    }
    function cardAlreadyInCheckers(checkers, card) {
      return checkers.length === 1 && checkers[0].id === card.id
    }
    function checkersFull(checkers) {
      return checkers.length === 2
    }
    function resetCheckersAfter(time) {
      setTimeout(() => {
        setCheckers([])
      }, time)
    }
  }

  useEffect(() => {
    if (cards) {
      const newCards = []
      cards.forEach(card => {
        const newCard =
        {
          ...card,
          flipped:
            checkers.findIndex(c => c.id === card.id)!==-1 ||
            completed.includes(card.type),
        }
        newCards.push(newCard);
      });
      console.log("newCards")
      console.log(newCards)
      if (checkers) {
        console.log("checkers")
        console.log(checkers)
      }
      if (completed) {
        console.log("completed")
        console.log(completed)
      }
      setCards(newCards)
    }
    // eslint-disable-next-line
  }, [checkers, completed])

  return (
    <div className="Board">
      {cards.map(card => (
        <Card {...card} onClick={onCardClick(card)} key={card.id} />
      ))}
    </div>
  )
}

export default Board
