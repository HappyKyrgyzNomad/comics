import "./app.css";

import Header from "../header/header";
import Thor from "../thor/thor";
import RandomCharacter from "../randomCharacter/randomCharacter";
import CharactersGrid from "../charactersGrid/charactersGrid";
import ChosenCharacter from "../chosenCharacter/chosenCharacter";
import WaitingAnimation from "../waitngAnimation/waitingAnimation";

function App() {
  return (
    <div>
      <Header />
      <div className="firstItems">
        <Thor />
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
