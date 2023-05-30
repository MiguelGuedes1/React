// import CSS
import './App.css'
// import React tools
import {useCallback,useEffect,useState} from "react"
// import data
import {wordsList} from "./data/words"
// import components
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'


const stages=[
  {id:1,name:"start"},
  {id:2,name:"game"},
  {id:3,name:"end"}
]


function App() {
  const [gameStage,setGameStage]=useState(stages[0].name)
  const [words]=useState(wordsList)

  // Funçao para começar o jogo
const startGame=()=>{
  setGameStage(stages[1].name)
}

// funçao para controlar a letra que o utilizador insere




  return (
    <div className="App">
      {gameStage==="start" &&  <StartScreen startGame={startGame}/>}
      {gameStage==="game" &&  <Game/>}
      {gameStage==="end" &&  <GameOver/>}
    </div>
  );
}

export default App;

