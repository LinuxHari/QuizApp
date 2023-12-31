import { useMemo, useState } from "react";
import "./App.css";
import data from "./data/reactQuestions.json";
import Options from "./components/Options";
import Navigation from "./components/Navigation";
import Modal from "./components/Modal";

export type Question = {
  id: string;
  question: string;
  options: string[];
};

export type AnsweredQuestion = {
  id: string;
  userClicked: string;
  answer: string;
};

function App() {
  const [question, setQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<
    AnsweredQuestion[]
  >([]);
  const currentQuestion = data[question];
  const userAnswer = answeredQuestions.find(
    (question) => currentQuestion.id === question.id
  );
  const isLocked = userAnswer ? true : false;
  const numOfQuestions = useMemo(() => data.length, [data]);
  const handleClick = (userClicked: string) => {
    if (isLocked) return;

    if (userClicked === currentQuestion.answer) setPoints((prev) => prev + 1);
    setAnsweredQuestions((prev) => [
      ...prev,
      { id: currentQuestion.id, userClicked, answer: currentQuestion.answer },
    ]);
  };
  const handleReset = () => {
    setAnsweredQuestions([])
    setQuestion(0)
    setPoints(0)
  };

  return (
    <main className="hero min-h-screen relative">
      <section className="absolute left-0 right-0 top-0 bottom-0 min-w-[250px] w-[30%] h-fit grid bg-white m-auto text-black p-10 gap-5 rounded-md shadow-xl">
        <div className="flex justify-between font-medium">
          <span className="text-secondary-500">
            Question {question + 1}/{data.length}
          </span>
          <span>Points: {points}</span>
        </div>
        <div>
          <p className="text-lg lg:text-2xl sm:text-xl font-medium text-primary-800">
            {`${question + 1})`} {currentQuestion.question}
          </p>
        </div>
        <Options
          currentQuestion={currentQuestion}
          isLocked={isLocked}
          userAnswer={userAnswer}
          onClick={(value: string) => handleClick(value)}
        />
        <Navigation
          question={question}
          numOfQuestions={numOfQuestions}
          handlePrev={() => setQuestion((prev) => prev - 1)}
          handleNext={() => setQuestion((prev) => prev + 1)}
        />
        <div className="flex items-center">
          <hr className="h-[1px] w-full bg-black mx-5" />
          <button
            className="bg-secondary-500 w-fit font-medium text-white px-4 py-2 rounded-md"
            onClick={() => handleReset()}
          >
            Reset
          </button>
          <hr className="h-[1px] w-full bg-black mx-5" />
        </div>
      </section>
      {answeredQuestions.length === data.length && (
        <Modal points={points} total={numOfQuestions} onClick={() => handleReset()} />
      )}
    </main>
  );
}

export default App;
