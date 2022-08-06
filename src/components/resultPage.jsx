import React from "react";
import Confetti from "react-confetti";

const ResultPage = ({ score, handleClick }) => {
  const styles = {
    color: score < 5 && "red",
  };

  const messageStyle = {
    width: "17rem",
    fontSize: '15px',
    wordBreak: "break-all",
    marginTop: "2rem",
  };

  const message = () => {
    if (score < 5) {
      return "You tried! Get atleast 5 in your next trial";
    } else if (score < 8) {
      return "Nice! Get atleast 10 in your next trial";
    } else {
      return "Great Job Smart Ass! Keep going";
    }
  };

  return (
    <div className="result-container">
      {score > 4 && <Confetti />}
      <h2 className="title">Country Quiz</h2>
      <div className="card">
        <div className="card__result">
          <h3>Results</h3>
          <p>
            You got <span style={styles}>{score}</span> correct answer
            {score > 1 && "s"}
          </p>
          {score < 5 ? "😥" : "🤩"}
          <p style={messageStyle}>{message()}</p>
        </div>
        <button className="button__again" onClick={handleClick}>
          Try again
        </button>
      </div>
    </div>
  );
};

export default ResultPage;
