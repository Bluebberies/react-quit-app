import React, { useState } from "react";
import QuestionPage from "./questionPage";
import ResultPage from "./resultPage";

const QuizPages = ({ question, answers, correct, loaded, getQuestion }) => {
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState();
  const [showQuestions, setShowQuestions] = useState(true);

  const handleSelect = (answer) => {
    if (selected === answer && selected === correct) return "correct";
    else if (selected === answer && selected !== correct) return "wrong";
    else if (answer === correct) return "correct";
  };

  const handleCheck = (answer) => {
    setSelected(answer);
    if (answer === correct) {
      setScore(score + 1);
    } else {
      setTimeout(() => {
        setShowQuestions(false);
      }, 1500);
    }
  };

  const handleIconCheck = (answer) => {
    if (selected === answer && selected === correct) return "check show";
    else if (selected === answer && selected !== correct) return "xmark show";
    else if (answer === correct) return "check show";
  };

  const handleNextQuestion = () => {
    setSelected(null);
    getQuestion();
  };

  const tryAgain = () => {
    getQuestion();
    setShowQuestions(true);
    setScore(0);
    setSelected(null);
  };

  if (showQuestions) {
    return (
      <QuestionPage
        loaded={loaded}
        question={question}
        handleNextQuestion={handleNextQuestion}
        selected={selected}
        correct={correct}
        answers={answers}
        handleSelect={handleSelect}
        handleCheck={handleCheck}
        handleIconCheck={handleIconCheck}
      />
    );
  } else {
    return <ResultPage score={score} handleClick={tryAgain} />;
  }
};

export default QuizPages;
