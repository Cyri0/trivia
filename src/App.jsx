import React, { useState, useEffect } from 'react'

const App = () => {
  const [isLight, setIsLight] = useState(true)
  const [question, setQuestion] = useState(null)
  const [answers, setAnswers] = useState([])

  let light = {
    backgroundColor: "#FAFAFA"
  }
  let dark = {
    backgroundColor: "#313e51"
  }

  useEffect(()=>{
    fetch("https://opentdb.com/api.php?amount=1")
    .then(res => res.json())
    .then(data => {
      if(data.results){
        setQuestion(data.results[0])

        let incorrect = data.results[0].incorrect_answers
        let correct = data.results[0].correct_answer

        /*MIX*/

        let li = [...incorrect, correct]
        li = li.sort(()=>Math.random() - 0.5)

        /*MIX*/

        setAnswers(li)
      }
    })
  }, [])

  const testAnswer = (e, answer) => {
    if( question.correct_answer === answer ){
      e.target.style.backgroundColor = "green"
    }else{
      e.target.style.backgroundColor = "red"
    }
  }

  return (
    <div className='main' style={isLight ? light : dark}>

      <input 
        className='my-toggle'
        type="checkbox"
        onChange={() => {setIsLight(isLight => !isLight)}}
        checked={isLight}
      />

      {
        question === null ?
        <h1>Loading...</h1>:
        
        <section className={ isLight ? "" : "light-font" } >

          <div className="question">
            <span className='eyebrow'>
              <BeautyText text={ question.category }/>
            </span>
            <h1>
              <BeautyText text={ question.question }/>
            </h1>
          </div>

          <div className="answers">

            {answers.map(answer => <button onClick={(e)=>testAnswer(e, answer)}>
              <BeautyText text={ answer }/>
            </button>)}
            
          </div>
        </section>
      }
    </div>
  )
}

const BeautyText = (props) => {
  return(
    <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
  )
}


export default App