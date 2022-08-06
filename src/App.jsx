import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import QuizPages from "./components/quizPages";
import getReq from "./services/httpService";

function App() {
  const [loaded, setLoaded] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(9);
  const [question, setQuestion] = useState("");

  const getQuestion = async () => {
    setLoaded(false);
    const url = `https://opentdb.com/api.php?amount=1&category=${questionIndex}&difficulty=easy`;
    try {
      const {
        data: { results },
      } = await getReq(url);
      setCorrectAnswer(results[0].correct_answer);
      setIncorrectAnswers(results[0].incorrect_answers);
      setQuestion(results[0].question);
      setLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };

  const shuffledAnswers = () => {
    let list = [correctAnswer, ...incorrectAnswers];
    return list.sort(() => Math.random() - 0.5);
  };

  const handleNext = () => {
    getQuestion();
    if (questionIndex === 28) {
      setQuestionIndex(9);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };

  useEffect(() => {
    getQuestion();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <QuizPages
        answers={shuffledAnswers()}
        correct={correctAnswer}
        loaded={loaded}
        getQuestion={handleNext}
        question={question}
      />
      <Footer />
    </div>
  );
}

export default App;
