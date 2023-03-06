import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import FrontCard from "./components/FrontCard.jsx"
import BackCard  from './components/BackCard'

function App() {
  const [count, setCount] = useState(0);
  const [flippedCard, setCardState] = useState(false);

  const flipCardFunction = () => {
    
    setCardState(!flippedCard);
   
  }


  const updateCount = () => {
    if(count < 9)
      setCount(count+1);
  }

  const decreaseCount = () => {
    if(count>2)
      setCount(count-1);
  }

  const [cardColor, setCardColor] = useState("blue");

// const setCardColor = (cardColor) => {
//     setCardColor(cardColor);
//   };

const colorHandler = (newColor)  => {
    setCardColor(newColor);
  }

const containerClass = `cardDisplay ${cardColor}`;

  return (
    <div className="App">
      <div class = "info">
          <h1>Probability</h1>
          <p>What's the probability that you can get all questions right? Who knows? 🤷‍♀️</p>
          <h2>Number of cards: 10</h2>
          <h3>Difficulty levels: 🟢 (green) = Easy, 🟡 (yellow) = Medium, 🔴 (red) = Hard</h3>
          <div className = "card-container">
            <div className = {containerClass}  onClick = {flipCardFunction} >  
              {flippedCard? <BackCard index = {count} onColorChange = {colorHandler}/> : <FrontCard index = {count} onColorChange = {colorHandler}/>}    
            </div>
          </div>
          <div>
          <button onClick = {decreaseCount}>⬅️</button>
          <button onClick = {updateCount}>➡️</button>
          </div>

      </div>
    </div>
  )
}

export default App
