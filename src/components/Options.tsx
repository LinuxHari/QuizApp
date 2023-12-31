import { AnsweredQuestion, Question } from '../App'

type OptionsProps = {
    currentQuestion: Question,
    isLocked: boolean,
    userAnswer?: AnsweredQuestion,
    onClick: (value:string) => void
}

const Options = ({currentQuestion, isLocked, userAnswer, onClick}:OptionsProps) => {
  const optionChars = ["A", "B", "C", "D"];
  return (
    <>
    {currentQuestion.options.map((option:string, i:number) => (
            <button
              key={i}
              className={`${
                option === userAnswer?.answer
                  ? "bg-primary-100"
                  : option === userAnswer?.userClicked &&
                    userAnswer.userClicked !== userAnswer?.answer
                  ? "bg-secondary-100"
                  : "bg-white"
              } w-full border border-gray-400 text-left p-2 leading-7 ${!isLocked && "hover:bg-primary-50"} ${isLocked && "cursor-default"}`}
              value={option}
              onClick={(e) => onClick(e.currentTarget.value)}
            >
              <span className="text-white font-semibold bg-primary-800 rounded-full px-2 py-1 text-center mr-1">{`${optionChars[i]}`}</span>  {option}
            </button>
        ))}
    </>
  )
}

export default Options