import { Component } from "react";
import MarvelService from "../../services/marvelService";

import "./RandomChar.css";

class RandomChar extends Component {
  constructor(props) {
    super(props);
    this.updateChar();
  }
  state = {
    char: {},
  };

  marvelService = new MarvelService();

  onCharLoaded = (char) => {
    this.setState({ char });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011334 - 1011400) + 1011334);
    this.marvelService.getCharacter(id).then(this.onCharLoaded);
  };

  render() {
    const {
      char: { name, description, thumbnail, homepage, wiki },
    } = this.state;

    function refreshPage() {
      window.location.reload(true);
    }

    if (this.state.char.name == null) {
      return (
        <p className="error">
          Character not found.{" "}
          <button className="thorBtn refresh" onClick={refreshPage}>
            Refresh
          </button>{" "}
          page to update data
        </p>
      );
    }

    const descriptionError = () => {
      return <p>Description not found</p>;
    };

    return (
      <div className="thor ">
        <img className="thorImg" src={thumbnail}></img>
        <div>
          <h1 className="charName">{name}</h1>
          <p className="charDescription error1">
            {description === "" ? descriptionError() : description}
          </p>
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
