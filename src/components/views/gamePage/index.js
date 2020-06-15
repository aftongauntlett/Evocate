import React, { Component } from "react";
import react from "../../../images/react.png";
import Board from "../../Board/Board";
import cardTop from "../../../images/cardback.png";
import cat from "../../../images/cat.jpg";
import axios from "axios";

function setupCards(props) {
  console.log("setupCards");
  console.log(props);
  let theme = props.theme;

  let id = 1;
  function importAll(r) {
    return r.keys().map(r);
  }

  const imagesPoke = importAll(
    require.context(
      "../themes/images/pokemon-images",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  const imagesSuper = importAll(
    require.context(
      "../themes/images/superhero-images",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const themes = {
    default: [
      {
        type: "react",
        cardImage: react,
      },
      {
        type: "cat",
        cardImage: cat,
      },
    ],
  };
  let cardCount = parseInt(props.cardCount);

  if (theme == "random") {
    const picsumApiUrl = "https://picsum.photos/200";

    const getImages = async () => {
      let fetchedImages = [];

      while (fetchedImages.length < cardCount) {
        const response = await axios.get(picsumApiUrl);
        console.log("random image");
        console.log(response);

        if (response.request.responseURL) {
          fetchedImages.push(response.request.responseURL);
        }
        console.log(fetchedImages);
      }
      id = 1;
      const cardsRandom = [];
      for (let i = 0; i < fetchedImages.length; i++) {
        const getCard = () => ({
          id: id++,
          type: i,
          cardTop,
          cardImage: fetchedImages[i],
          flipped: false,
        });
        cardsRandom.push(getCard());
      }
      themes[theme] = cardsRandom;
      const cards = [];
      id = 1;
      themes[theme].forEach((image) => {
        if (id < cardCount) {
          let card = {
            id: id,
            type: image.type,
            cardTop,
            cardImage: image.cardImage,
            flipped: false,
          };
          id++;
          cards.push(card);
          console.log(card);
          card = JSON.parse(JSON.stringify(card));
          card.id = id;
          cards.push(card);
          id++;
        }
      });
      return suffle(themes[theme]);
    };
    return getImages();
    theme = "default";
  } else {
    id = 1;

    const cardsPoke = [];
    for (let i = 0; i < imagesPoke.length; i++) {
      const element = imagesPoke[i];
      const getCard = () => ({
        id: id++,
        type: i,
        cardTop,
        cardImage: imagesPoke[i],
        flipped: false,
      });
      cardsPoke.push(getCard());
    }

    themes["pokemon"] = cardsPoke;

    id = 1;
    const cardsHeroes = [];
    for (let i = 0; i < imagesSuper.length; i++) {
      const element = imagesSuper[i];
      const getCard = () => ({
        id: id++,
        type: i,
        cardTop,
        cardImage: imagesSuper[i],
        flipped: false,
      });
      cardsHeroes.push(getCard());
    }
    themes["superheroes"] = cardsHeroes;

    const cards = [];
    id = 1;

    themes[theme].forEach((image) => {
      if (id < cardCount) {
        let card = {
          id: id,
          type: image.type,
          cardTop,
          cardImage: image.cardImage,
          flipped: false,
        };
        id++;
        cards.push(card);
        console.log(card);
        card = JSON.parse(JSON.stringify(card));
        card.id = id;
        cards.push(card);
        id++;
      }
    });
    console.log(cards);
    return suffle(cards);
  }
}

function suffle(cardList) {
  let len = cardList.length;
  for (let i = 0; i < len; i++) {
    let randomCard = Math.floor(Math.random() * len);
    let copyCurrent = cardList[i];
    let copyRandom = cardList[randomCard];
    cardList[i] = copyRandom;
    cardList[randomCard] = copyCurrent;
  }

  return cardList;
}

export default class index extends Component {
  render() {
    const cardCount = this.props.cardCount;
    const cards = setupCards(this.props);

    return (
      <div className="App">
        <Board cards={cards} cardCount={cardCount} />
      </div>
    );
  }
}
