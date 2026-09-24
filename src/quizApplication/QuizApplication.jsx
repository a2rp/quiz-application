import React, { useMemo, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiCheckCircle, FiRotateCcw } from "react-icons/fi";
import { Button } from "@mui/material";
import styles from "./styles.module.scss";
import QNASection from "./QNASection";

const questions = [
  { question: "What is 1 + 1?", answers: [1, 2, 3, 4], correctAnswerIndex: 1 },
  { question: "What is 2 + 5?", answers: [67, 43, 7, -3], correctAnswerIndex: 2 },
  { question: "What is the English word for 5?", answers: ["one", "three", "five", "seven"], correctAnswerIndex: 2 },
  { question: "How many days are in a week?", answers: ["One", "Three", "Five", "Seven"], correctAnswerIndex: 3 },
  { question: "How many months are in one year?", answers: ["Ten", "Eleven", "Twelve", "Thirteen"], correctAnswerIndex: 2 },
];

const QuizApplication = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const current = questions[currentIndex];
  const score = useMemo(() => questions.reduce((total, item, index) => total + (selectedAnswers[index] === item.correctAnswerIndex ? 1 : 0), 0), [selectedAnswers]);

  const selectAnswer = (value) => setSelectedAnswers((answers) => ({ ...answers, [currentIndex]: Number(value) }));
  const restart = () => { setCurrentIndex(0); setSelectedAnswers({}); };

  return <section className={styles.container} aria-labelledby="quiz-title">
    <div className={styles.intro}><span className={styles.eyebrow}>QUICK PRACTICE</span><h1 id="quiz-title">Quiz Application</h1><p>Answer five short questions, move at your own pace, and check your score as you go.</p></div>
    <div className={styles.summary}><div><span>Progress</span><strong>{currentIndex + 1} / {questions.length}</strong></div><div><span>Score</span><strong>{score} / {questions.length}</strong></div><div className={styles.progress}><span style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} /></div></div>
    <QNASection questionNumber={currentIndex + 1} question={current.question} answers={current.answers} correctAnswerIndex={current.correctAnswerIndex} selectedValue={selectedAnswers[currentIndex]} onSelect={selectAnswer} />
    <div className={styles.actions}>
      <Button variant="outlined" startIcon={<FiArrowLeft />} disabled={currentIndex === 0} onClick={() => setCurrentIndex((value) => value - 1)}>Previous</Button>
      {currentIndex < questions.length - 1 ? <Button variant="contained" endIcon={<FiArrowRight />} onClick={() => setCurrentIndex((value) => value + 1)}>Next question</Button> : <Button variant="contained" startIcon={<FiRotateCcw />} onClick={restart}>Restart quiz</Button>}
      <span className={styles.result}><FiCheckCircle /> {score} correct</span>
    </div>
  </section>;
};
export default QuizApplication;
