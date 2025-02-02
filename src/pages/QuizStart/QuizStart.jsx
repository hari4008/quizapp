import React from 'react'
import { Button } from "react-bootstrap"
import  "../../assets/css/QuizStart.css"

const QuizStart = ({ onStart, error }) => {
  return (
    <div
      className={`d-flex flex-column align-items-center justify-content-center min-vh-100 gradientBackground`}
    >
      <h1 className="display-4 mb-4 text-white">Welcome to the Quiz!</h1>
      <p className="lead mb-5 text-white">Test your knowledge and have fun!</p>
      {error && <p className="text-warning mb-3">{error}</p>}
      <Button onClick={onStart} variant="light" size="lg">
        Start Quiz
      </Button>
    </div>
  )
}

export default QuizStart

