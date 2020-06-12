import React, { Component } from "react";
import react from '../../../images/react.png'
import Board from '../../Board/Board'
import cardTop from '../../../images/blank.png'
import cat from '../../../images/cat.jpg'
import Timer from './timer'

// import "./styles.css";
function setupCards(props) {
  console.log("setupCards")
  console.log(props)
  let theme = props.theme
  // console.log(count)
  let id = 1
  function importAll(r) {
    return r.keys().map(r);
  }

  const imagesPoke = importAll(require.context('../themes/images/pokemon-images', false, /\.(png|jpe?g|svg)$/));
  const imagesSuper = importAll(require.context('../themes/images/superhero-images', false, /\.(png|jpe?g|svg)$/));

  const themes = {
    "default": [{
      type: 'react',
      cardImage: react
    }, {
      type: 'cat',
      cardImage: cat
    }]
  }
  // TODO: random images from rest api
  if (theme == 'random')
    theme = 'default'

  themes['pokemon'] = Object.keys(imagesPoke).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      cardTop,
      cardImage: imagesPoke[item],
      flipped: false,
    })
    // console.log(getCard())
    return [...result, getCard()]
  })
  id = 1;
  themes['superheroes'] = Object.keys(imagesSuper).reduce((result, item) => {
    const getCard = () => ({
      id: id++,
      type: item,
      cardTop,
      cardImage: imagesSuper[item],
      flipped: false,
    })
    // console.log(getCard())
    return [...result, getCard()]
  })
  const cards = []
  id = 1;
  themes[theme].forEach(image => {
    let card = {
      id: id,
      type: image.type,
      cardTop,
      cardImage: image.cardImage,
      flipped: false
    }
    id++;
    cards.push(card)
    console.log(card)
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
    const cards = setupCards(this.props)
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




