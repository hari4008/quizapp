
import { useState, useEffect, useRef } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import { fetchQuizData } from "@/lib/api"
import styles from "../../assets/css/Quiz.css"
import QuizStart from "../QuizStart/QuizStart"
import QuizSummary from "../QuizSummary/QuizSummary"
import QuizQuestion from "../QuizQuestion/QuizQuestion"
import { useDispatch, useSelector } from "react-redux"
import { fetchQuestions } from "../../redux/slices/quizSlice"
import { toast } from "react-toastify"


const fallbackQuizData = [
    {
        id: 1,
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: 2,
    },
    {
        id: 2,
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: 0,
    },
    {
        id: 3,
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
        correctAnswer: 1,
    },
]

const Quiz = () => {
    const dispatch = useDispatch()

    const { questions, loading, status, error } = useSelector(state => state.quizStore)

    const [quizData, setQuizData] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [score, setScore] = useState(0)
    const [showSummary, setShowSummary] = useState(false)
    const [quizStarted, setQuizStarted] = useState(false)
    const [streak, setStreak] = useState(0)
    // const [error, setError] = useState(null)

    const isFetched = useRef(false);

    useEffect(() => {
        if (!isFetched.current) {
            dispatch(fetchQuestions());
            isFetched.current = true;
        }
    }, [dispatch]);


    useEffect(() => {
        if (status === "succeeded" && questions.length > 0) {
            const formattedQuestions = questions.map(q => ({
                ...q,
                options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5), // Shuffle options
                correctAnswer: [...q.incorrect_answers, q.correct_answer].indexOf(q.correct_answer) // Get correct index
            }));
            setQuizData(formattedQuestions);
        } else if (status === "failed") {
            console.warn("API failed. Using fallback data.");
            toast.error("API failed. Using fallback data.")
            setQuizData(fallbackQuizData);
        }
    }, [status, questions]);

    const handleStartQuiz = () => {
        setQuizStarted(true)
        setCurrentQuestion(0)
        setScore(0)
        setShowSummary(false)
        setStreak(0)
    }

    const handleAnswer = (selectedAnswer) => {
        // const correct = selectedAnswer === quizData[currentQuestion].correctAnswer
        const correct = selectedAnswer === quizData[currentQuestion].correct_answer
        
        if (correct) {
            setScore(score + 1)
            setStreak(streak + 1)
        } else {
            setStreak(0)
        }

        if (currentQuestion + 1 < quizData.length) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowSummary(true)
        }
    }

    if (!quizStarted) {
        return <QuizStart onStart={handleStartQuiz} error={error} />
    }

    if (showSummary) {
        return <QuizSummary score={score} totalQuestions={quizData.length} onRestart={handleStartQuiz} />
    }

    return (
        <div className={`container py-5 ${styles.gradientBackground}`}>
            <h1 className="text-center mb-4">Quiz App</h1>
            {error && <p className="text-center text-danger">{error}</p>}
            {loading == true && <h4 className="text-center">
                <i className="fas fa-spinner fa-spin"></i> Loading...
            </h4>}
            {quizData.length > 0 && (
                <QuizQuestion
                    question={quizData[currentQuestion]}
                    onAnswer={handleAnswer}
                    currentQuestion={currentQuestion + 1}
                    totalQuestions={quizData.length}
                    streak={streak}
                />
            )}
        </div>
    )
}
export default Quiz