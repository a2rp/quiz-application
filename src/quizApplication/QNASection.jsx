import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useEffect, useState } from 'react'

const QNASection = ({ displayQuestion, setDisplayQuestion, srno, question, answers, correctAnswerIndex }) => {
    const [selectedValue, setSelectedValue] = useState(-1);
    const [correctIncorrectText, setCorrectIncorrectText] = useState("Incorrect");

    useEffect(() => {
        console.log(parseInt(selectedValue), correctAnswerIndex, "selectedValue");
    }, [selectedValue]);

    return (
        <div>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                    Question {srno}/5:
                    <h3>{question}</h3>
                    <h3>Selected answer: {correctIncorrectText}</h3>
                </FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    sx={{ marginLeft: "15px" }}
                    value={selectedValue}
                    onChange={(event) => {
                        setSelectedValue(event.target.value);
                        if (parseInt(event.target.value) === correctAnswerIndex) {
                            setCorrectIncorrectText("Correct")
                        } else {
                            setCorrectIncorrectText("Incorrect")
                        }
                    }}
                >
                    <FormControlLabel value={0} control={<Radio />} label={answers[0]} />
                    <FormControlLabel value={1} control={<Radio />} label={answers[1]} />
                    <FormControlLabel value={2} control={<Radio />} label={answers[2]} />
                    <FormControlLabel value={3} control={<Radio />} label={answers[3]} />
                </RadioGroup>
            </FormControl>
            <div style={{ display: "flex", gap: "30px", marginTop: "15px" }}>
                <Button
                    variant="contained"
                    onClick={() => setDisplayQuestion(displayQuestion - 1)}
                    disabled={srno === 1}
                >
                    Prev question
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setDisplayQuestion(displayQuestion + 1)}
                    disabled={srno === 5}
                >
                    {srno === 5 ? "Restart exam" : "Next question"}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => setDisplayQuestion(1)}
                    disabled={srno !== 5}
                >
                    Restart
                </Button>
            </div>
        </div>
    )
}

export default QNASection

