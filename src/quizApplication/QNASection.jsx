import React from "react";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import styles from "./styles.module.scss";

const QNASection = ({ questionNumber, question, answers, correctAnswerIndex, selectedValue, onSelect }) => {
  const hasAnswer = selectedValue !== undefined;
  const isCorrect = Number(selectedValue) === correctAnswerIndex;
  return <div className={styles.questionCard}>
    <FormControl fullWidth>
      <FormLabel className={styles.questionLabel}><span>Question {questionNumber} of 5</span><h2>{question}</h2></FormLabel>
      <RadioGroup aria-label={question} value={selectedValue ?? ""} onChange={(event) => onSelect(event.target.value)} className={styles.answers}>
        {answers.map((answer, index) => <FormControlLabel key={String(answer)} value={index} control={<Radio />} label={String(answer)} />)}
      </RadioGroup>
    </FormControl>
    <p className={`${styles.feedback} ${hasAnswer ? (isCorrect ? styles.correct : styles.incorrect) : ""}`}>
      {hasAnswer ? (isCorrect ? "Correct answer" : "Try another option next time") : "Choose an answer to continue"}
    </p>
  </div>;
};
export default QNASection;
