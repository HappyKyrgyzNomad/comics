import { Component } from "react";
import MarvelService from "../../services/marvelService";

import "./RandomChar.css";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }
  state = {
    name: null,
    description: null,
    thumbnail: null,
    homepage: null,
    wiki: null,
  };

  marvelService = new MarvelService();

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011134) + 1011334);
    this.marvelService.getCharacter(id).then((res) => {
      this.setState(res);
    });
  };

  render() {
    const { name, description, thumbnail, homepage, wiki } = this.state;
    return (
      <div className="thor">
        <img className="thorImg" src={thumbnail}></img>
        <div>
          <h1 className="charName">{name}</h1>
          <p className="charDescription">{description}</p>
          <a href={homepage} className="thorBtn">
            Homepage
          </a>
          <a href={wiki} className="wikiBtn thorBtn">
            Wiki
          </a>
        </div>
      </div>
    );
  }
}
export default RandomChar;
