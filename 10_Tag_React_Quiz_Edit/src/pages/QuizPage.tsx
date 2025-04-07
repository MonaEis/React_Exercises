import { Link, useParams } from "react-router-dom";
import quizzes from "../data/quizData";
import { useState } from "react";
import OptionButton from "../components/quiz/OptionButton";

export default function QuizPage() {
    const params = useParams(); // {topic: "html"}
    const { slug } = params;
    const quiz = quizzes.find((quiz) => quiz.slug === slug);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

    //* Falls kein Quiz gefunden wurde: Early return
    if (!quiz) {
        return (
            <div>
                <h1>Sorry, haben wir nicht</h1>
                <Link to="/">Zurück zur Homepage</Link>
            </div>
        );
    }

    console.log(quiz.questions);

    //+ Obacht: Wenn currentQuestionIndex größer ist als currentQuestion.length, kommt undefined raus
    const currentQuestion = quiz.questions[currentQuestionIndex];
    const handleAnswerClick = (selectedAnswer: string) => {
        const isCorrect = currentQuestion.correctOption === selectedAnswer;

        if (isCorrect) {
            setCorrectAnswers((previousValue) => previousValue + 1);
        }

        //* wir speichern die ausgewählte Antwort zwischen, um sie als richtig oder falsch stylen zu können
        setSelectedAnswer(selectedAnswer)

        setTimeout(() => {
            //! hier macht es Sinn den state direkt zu setzen, statt mit einer Callbackfunktion zu arbeiten
            //! da wir maximal auf die nächste Frage wechseln wollen
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswer(null)
        }, 2000);
    };

    //* Falls Quizende erreicht ist, Ergebnisse rendern
    if (currentQuestionIndex === quiz.questions.length)
        return (
            "Results: " +
            correctAnswers +
            "/" +
            quiz.questions.length +
            " richtige Antworten <3"
        );

        return (
            <main className="page-container">
              <div>
                <h1>{quiz.topic}</h1>
                <p>{currentQuestion.title}</p>
              </div>
              <div className="button-stack">
        {currentQuestion.options.map((option, index) => (
          <OptionButton
            handleAnswerClick={handleAnswerClick}
            option={option}
            key={option}
            index={index}
            isCorrect={Boolean(selectedAnswer)&&currentQuestion.correctOption === option}
            isSelected={selectedAnswer === option}
          //  isRevealed={selectedAnswer === null ? false : true}
          //  isRevealed={Boolean(selectedAnswer)}
          //  isRevealed={!!selectedAnswer}
          />
        ))}
      </div>
            </main>
          );
        }
