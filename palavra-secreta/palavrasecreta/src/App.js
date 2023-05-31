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
  const [gameStage,setGameStage]=useState(stages[0].name)  // definir o estado/pagina em qual o jogo se encontra
  const [words]=useState(wordsList)  // palavras usadas no jogo
  const[pickedWord,setpickedWord]=useState("") // palavras seleccionadas
  const [pickedCategory,setpickedCategory]=useState("") // categorias seleccionadas
  const[letters,setLetters]=useState([]) // letras seleccionadas
  const [guessedLetters,setguessedLetters]=useState([])  // letras adivinhadas
  const [wrongLetters,setwrongLetters]=useState([])   // letras erradas pelo utilizador
  const [guesses,setguesses]=useState(3)  // numero de chances que o utilizador tem para acertar a palavra
  const [score,setscore]=useState(0)  // pontuaçao final do utilizador



// Escolher uma categoria e uma palavra aleatoria

const pickWordAndCategory= () => {
    const categories = Object.keys(words)
    const category=categories[Math.floor(Math.random()*Object.keys(categories).length)]
        console.log(category)

    const word=words[category][Math.floor(Math.random()*words[category].length)]

         console.log(word)

         return {word,category}
}

// Funçao para começar o jogo
const startGame=()=>{
  const {word,category}=pickWordAndCategory()
  setGameStage(stages[1].name)



  // Criar um array com as letras da palavra

  let wordLetters=word.split("")
  wordLetters=wordLetters.map(letter=>letter.toLowerCase())


    console.log(word,category)
    console.log(wordLetters)
  
    //fill states

    setpickedWord(word)
    setpickedCategory(category)
    setLetters(wordLetters)


}
// funçao para controlar a letra que o utilizador insere

const verifyLetter=()=>{
  setGameStage(stages[2].name)
}

// funçao para reiniciar o jogo

const retry=()=>{
  setGameStage(stages[0].name)
}

return (
    <div className="App">
      {gameStage==="start" &&  <StartScreen startGame={startGame}/>}
      {gameStage==="game" &&  (
      <Game 
      verifyLetter={verifyLetter} 
      pickedWord={pickedWord}
      pickesCategory={pickedCategory}
      letters={letters}
      guessedLetters={guessedLetters}
      wrongLetters={wrongLetters}
      guesses={guesses}
      score={score}
      />
      )} 
      {gameStage==="end" &&  <GameOver retry={retry} />}
    </div>
  );
}

export default App;

