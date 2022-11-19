import "./waitingAnimation.css";

const WaitingAnimation = () => {
  return (
    <div>
      <h1>Please select a character to see information</h1>
      <p className="char__select">
        Please select a character to see information
      </p>
      <div className="skeleton">
        <div className="pulse skeleton header">
          <div className="pulse skeleton circle"></div>
          <div className="pulse skeleton mini"></div>
        </div>
        <div className="pulse skeleton block"></div>
        <div className="pulse skeleton block"></div>
        <div className="pulse skeleton block"></div>
      </div>
    </div>
  );
};
export default WaitingAnimation;
