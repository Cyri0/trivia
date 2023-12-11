import React, { useState } from 'react'

const App = () => {
  const [isLight, setIsLight] = useState(true)
  let light = {
    backgroundColor: "#FAFAFA"
  }
  let dark = {
    backgroundColor: "#313e51"
  }

  return (
    <div className='main' style={isLight ? light : dark}>

      <input 
        type="checkbox"
        onChange={() => {setIsLight(isLight => !isLight)}}
        checked={isLight}
      />

    </div>
  )
}

export default App