import "./app.css";

import Header from "../header/header";
import RandomChar from "../RandomChar/RandomChar";
import CharactersGrid from "../charactersGrid/charactersGrid";
import ChosenCharacter from "../chosenCharacter/chosenCharacter";
import WaitingAnimation from "../waitngAnimation/waitingAnimation";
import RandomCharacter from "../randomCharacter/randomCharacter";

function App() {
  return (
    <div>
      <Header />
      <div className="firstItems">
        <RandomChar />
        <RandomCharacter />
      </div>
      <div className="secondItems">
        <CharactersGrid />
        <ChosenCharacter />
      </div>
      <WaitingAnimation />
    </div>
  );
}

export default App;
