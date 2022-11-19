import "./randomCharacter.css";
import shield from "../../media/shield.jpg";
import hummer from "../../media/mjolnir.jpg";

const RandomCharacter = () => {
  return (
    <div className="random">
      <h1 className="randomText">
        Random character for today! Do you want to get to know him better?
      </h1>
      <div className="tryIt">
        <h2 className="randomText2">Or choose another one</h2>
        <button className="thorBtn btn--try">Try it!</button>
      </div>
      {/* <img src={shield} className="shield"></img>
      <img src={hummer} className="hummer"></img> */}
    </div>
  );
};

export default RandomCharacter;
