type NavigationProps = {
    question: number,
    numOfQuestions: number,
    handlePrev: () => void,
    handleNext: () => void,
}

const Navigation = ({question, numOfQuestions, handlePrev, handleNext}:NavigationProps) => {
  return (
    <div className="flex w-full justify-between">
          <div>
          {question > 0 && <button className="text-primary-800 font-semibold" onClick={handlePrev}>&larr; Previous</button>}
          </div>
          {question < numOfQuestions - 1 && (
            <button className="text-primary-800 font-semibold" onClick={handleNext}>Next &rarr;</button>
          )}
    </div>
  )
}

export default Navigation