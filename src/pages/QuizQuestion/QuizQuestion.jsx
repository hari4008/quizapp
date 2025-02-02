import React from 'react'
import { useState } from "react"
import { Button, Card, ProgressBar } from "react-bootstrap"
import "../../assets/css/QuizQuestion.css"

const QuizQuestion = ({ question, onAnswer, currentQuestion, totalQuestions, streak }) => {
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const handleSubmit = () => {
        if (selectedAnswer !== null) {
            onAnswer(selectedAnswer)
            setSelectedAnswer(null)
            setSelectedAnswerIndex(null)
        }
    }

    return (
        <>

            <Card className="quiz-card center">
                <Card.Header className="quiz-card-header">
                    <Card.Title className="quiz-question-text">
                        <div dangerouslySetInnerHTML={{ __html: question.question }} />
                    </Card.Title>
                </Card.Header>
                <Card.Body className="quiz-card-body">
                    <div className="d-grid gap-2">
                        {question.options.map((option, index) => (
                            <Button
                                key={index}
                                variant={selectedAnswerIndex === index ? "primary" : "outline-primary"}
                                className="quiz-option-button text-start"
                                onClick={() => {
                                    setSelectedAnswerIndex(index);
                                    setSelectedAnswer(option);
                                }}
                            >
                                <div dangerouslySetInnerHTML={{ __html: option }} />
                            </Button>
                        ))}
                    </div>
                </Card.Body>
                <Card.Footer className="quiz-footer">
                    <Button
                        onClick={handleSubmit}
                        disabled={selectedAnswer === null}
                        className="quiz-submit-button mb-3 w-100">
                        Submit Answer
                    </Button>
                    <ProgressBar now={(currentQuestion / totalQuestions) * 100} className="quiz-progress mb-2" />
                    <p className="text-muted small mb-2">
                        Question {currentQuestion} of {totalQuestions}
                    </p>
                </Card.Footer>
            </Card>



        </>
    )
}

export default QuizQuestion



