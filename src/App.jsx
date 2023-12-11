import React, { useState, useEffect } from 'react'

const App = () => {
  const [isLight, setIsLight] = useState(true)
  const [question, setQuestion] = useState(null)

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
      console.log(data.results);
    })
  }, [])

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
        <section>
          <div className="question">
            <span className='eyebrow'>History</span>
            <h1>Miért vannak dolgok?</h1>
          </div>

          <div className="answers">
            <button>Csak</button>
            <button>Csak</button>
            <button>Csak</button>
            <button>Csak</button>
          </div>
        </section>
      }

    </div>
  )
}

export default App