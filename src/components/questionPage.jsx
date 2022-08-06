import React from "react";
import Spinner from "react-bootstrap/Spinner";

const QuestionPage = ({
  loaded,
  question,
  handleNextQuestion,
  selected,
  correct,
  answers,
  handleSelect,
  handleCheck,
  handleIconCheck,
}) => {
  const alphabets = ["A", "B", "C", "D"];

  return loaded ? (
    <main className="container">
      <h2 className="title">Country Quiz</h2>
      <div className="card">
        <div id="card__question__container">
          <div className="card__question">
            <h3>{question}</h3>
          </div>
          <div className="card__buttons">
            {answers.map((answer, index) => (
              <button
                className={`button__option ${selected && handleSelect(answer)}`}
                key={answer}
                disabled={selected}
                onClick={() => handleCheck(answer)}
              >
                <span className="button-label">{alphabets[index]}</span>
                <span className="option">{answer}</span>
                <i
                  className={`fa-solid fa-circle-${
                    selected && handleIconCheck(answer)
                  }`}
                ></i>
              </button>
            ))}
          </div>
        </div>
        {selected === correct && (
          <button className="button__next" onClick={handleNextQuestion}>
            Next
          </button>
        )}
      </div>
    </main>
  ) : (
    <div className="spinner">
      <Spinner style={{ color: "hsl(0, 0%, 100%)" }} animation="border" />
      <p>Fetching please wait...</p>
    </div>
  );
};

export default QuestionPage;
