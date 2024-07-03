import React, { useState } from 'react'
import questions from './dataset/Questions'
import './Quiz.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import gif from './gif/tenor.gif'

function Quiz() {
  const [questionIdx,setQuestionIdx]=useState(0);
  const [score,setScore]=useState(0);
  const [showscore,setShowScore]=useState(false)

  const currentQuestion=questions[questionIdx];
  
  const selectOption = (idx) => {
    if(currentQuestion.answer===idx){
    setScore(score+1);
  } 
  const nextQuestion = questionIdx +1;
  if(nextQuestion < questions.length){
    setQuestionIdx(questionIdx+1); 
  }
  else{
    setShowScore(true);
  }
  } 

const reset = () => {
  setQuestionIdx(0);
  setScore(0);
  setShowScore(false);
}

  return (
    <div className='quiz-container'>
      {
        showscore ?(
          <>
          <img src={gif} alt='gif'/>
          <h1>Your Score is : {score}</h1>
          <button className='btn btn-info reset' onClick={reset}>RESTART</button>
          </>
        )  : (
          <div className='quiz-container__question'>
            <p>{currentQuestion.question}</p>
            <div className='quiz-container__options'>
                <ul className='quiz-container__ul'>
                  {currentQuestion.options.map((option,i) =>{
                    return <li className='quiz-container__li' onClick={() => selectOption(i)}>{option}</li>
               })}
                </ul>
            </div>
        </div>
        )
      }
    </div>
  )
}

export default Quiz