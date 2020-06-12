import React, { Component } from "react";
import react from '../../../images/react.png'
import Board from '../../Board/Board'
import cardTop from '../../../images/blank.png'
import cat from '../../../images/cat.jpg'
import Timer from './timer'


// import "./styles.css";
function setupCards() {
  let id = 1
  const images = [{
    type: 'react',
    img: react
  }, {
    type: 'cat',
    img: cat
  }]
  const cards = []
  images.forEach(image => {
    let card = {
      id: id,
      type: image.type,
      cardTop,
      cardImage: image.img,
      flipped: false
    }
    id++;
    cards.push(card)
    card = JSON.parse(JSON.stringify(card))
    card.id = id
    cards.push(card)
    id++
  });
  return suffle(cards)
}

function suffle(cardList) {
  let len = cardList.length
  for (let i = 0; i < len; i++) {
    let randomCard = Math.floor(Math.random() * len)
    let copyCurrent = cardList[i]
    let copyRandom = cardList[randomCard]
    cardList[i] = copyRandom
    cardList[randomCard] = copyCurrent
  }

  return cardList
}

export default class index extends Component {
  constructor(props){
    super(props)
    this.state = {
      finalTime: null,
      running: true
    }


  }

  componentDidMount() {
    // let seconds = 0
    // let interval = setInterval(() => {
    //   seconds++
    //   console.log(seconds)
    //   if (seconds === 10) {
    //     clearInterval(interval)
    //     this.setState({ running: false })
    //   }
    // }, 1000)
  }

  setFinalTime(time){
    this.setState({finalTime: time})
  }

  render() {
    const cards = setupCards()
    return (
      <div className="App">
       <Timer running={this.state.running} setFinalTime={this.setFinalTime.bind(this)} />
        <Board cards={cards} />
        {
          this.state.finalTime !== null ? (
            <p style={{fontSize: '20px', color: 'white'}}>Final Time: {this.state.finalTime}</p>
          ) : ''
        }
      </div>
    )
    // return <div>Main Game!</div>;
  }
}




