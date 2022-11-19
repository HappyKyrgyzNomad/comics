import { Component } from "react";

import "./chosenCharacter.css";
import lokiImg from "../../media/loki.jpg";

class ChosenCharacter extends Component {
  state = {
    name: null,
    description: null,
    thumbnail: null,
    homepage: null,
    wiki: null,
  };
  render() {
    const { name, description, thumbnail, homepage, wiki } = this.state;
    return (
      <div className="container">
        <div className="header">
          <img className=" marg chosenImg" src={lokiImg}></img>
          <h1 className=" marg chosenName">Loki</h1>
          <button className="btn--homepage2 thorBtn ">Homepage</button>
          <button className="btn--wiki2 wikiBtn thorBtn">Wiki</button>
        </div>
        <p className="marg top">
          In Norse mythology, Loki is a god or jötunn or both. Loki is the son
          of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
          the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and
          the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari
          and/or Narfi and with the stallion Svaðilfari as the father, Loki gave
          birth—in the form of a mare—to the eight-legged horse Sleipnir. In
          addition, Loki is referred to as the father of Váli in the Prose Edda.
        </p>

        <h2 className="marg">Comics:</h2>
      </div>
    );
  }
}

export default ChosenCharacter;
