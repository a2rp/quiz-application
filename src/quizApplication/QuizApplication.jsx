import React, { useState } from "react";
import styles from "./styles.module.scss";
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import QNASection from "./QNASection";

const QuizApplication = () => {
    const [scores, setScores] = useState(0);
    const [displayQuestion, setDisplayQuestion] = useState(1);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);

    return (
        <div className={styles.container}>
            <h3 className={styles.heading}>Quiz Application</h3>

            <div className={styles.questionArea}>
                {displayQuestion === 1
                    && <>
                        <QNASection
                            displayQuestion={displayQuestion}
                            setDisplayQuestion={setDisplayQuestion}
                            srno={1}
                            question={"what is 1+1"}
                            answers={[1, 2, 3, 4]}
                            correctAnswerIndex={1}
                        />
                    </>}
                {displayQuestion === 2
                    && <>
                        <QNASection
                            displayQuestion={displayQuestion}
                            setDisplayQuestion={setDisplayQuestion}
                            srno={2}
                            question={"what is 2+5"}
                            answers={[67, 43, 7, -3]}
                            correctAnswerIndex={2}
                        />
                    </>}
                {displayQuestion === 3
                    && <>
                        <QNASection
                            displayQuestion={displayQuestion}
                            setDisplayQuestion={setDisplayQuestion}
                            srno={3}
                            question={"what is english of 5"}
                            answers={["one", "three", "five", "seven"]}
                            correctAnswerIndex={2}
                        />
                    </>}
                {displayQuestion === 4
                    && <>
                        <QNASection
                            displayQuestion={displayQuestion}
                            setDisplayQuestion={setDisplayQuestion}
                            srno={4}
                            question={"How many days in a week?"}
                            answers={["One", "Three", "five", "seven"]}
                            correctAnswerIndex={3}
                        />
                    </>}
                {displayQuestion === 5
                    && <>
                        <QNASection
                            displayQuestion={displayQuestion}
                            setDisplayQuestion={setDisplayQuestion}
                            srno={5}
                            question={"How many months in one year?"}
                            answers={["Ten", "Eleven", "Twelve", "Thirteen"]}
                            correctAnswerIndex={2}
                        />
                    </>}

            </div>
        </div>
    )
}

export default QuizApplication;

