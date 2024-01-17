import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value , setValue] = useState(5)

  let increaseHandler = () => {
    setValue(value+1)
  }

  let decreaseHandler = () => {
    if ( value <= 0 ){
      setValue(0)
      alert('your value goes under 0')
      
    }else{
      setValue(value - 1)
    }

  }

  return (
    <>
      <h1>Hi There</h1>
      <h2>lets make a small counter project</h2>
      <p>Counter value is : {value} </p>
      <button type="button" onClick= {increaseHandler}>Increase Value</button>
      <button type="button" onClick= {decreaseHandler}>Decrease Value</button>
    </>
  )
}

export default App
