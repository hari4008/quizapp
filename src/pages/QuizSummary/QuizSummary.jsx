import React from 'react'
import { Button, Card } from "react-bootstrap"
import "../../assets/css/QuizSummary.css"
import { fetchQuestions } from '../../redux/slices/quizSlice'
import { useDispatch } from 'react-redux'

const QuizSummary = ({ score, totalQuestions, onRestart }) => {

  const dispatch = useDispatch();
  const percentage = Math.round((score / totalQuestions) * 100)

  return (
    <div className={`d-flex align-items-center justify-content-center min-vh-100 gradientBackground`}>
      <Card className="text-center" style={{ maxWidth: "400px" ,width:"30%" }}>
        <Card.Header>
          <Card.Title className="h3">Quiz Completed!</Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="trophy">🏆</div>
          <h2 className="display-4 mb-3">
            {score} / {totalQuestions}
          </h2>
          <h5 className="lead mb-4">You scored <b>{percentage}% </b></h5>
          {percentage >= 80 && <p className="text-success font-weight-bold">Great job! You're a quiz master!</p>}
          {percentage >= 60 && percentage < 80 && (
            <h5 className="text-primary font-weight-bold">Good effort! Keep practicing!</h5>
          )}
          {percentage < 60 && <h5 className="text-danger font-weight-bold">You can do better! Try again!</h5>}
        </Card.Body>
        <Card.Footer>
          <Button
            onClick={() => {
              onRestart();
              dispatch(fetchQuestions());
            }}
            variant="primary" size="lg" block>
            Restart Quiz
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}

export default QuizSummary



