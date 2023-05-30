import "./Game.css"

const Game =({verifyLetter,pickedWord,picketCategory,letters,guessedLetters,wrongLetters,guesses,score})=>{
    return(
        <div className="game">
            
            <p className="points">
                <span>Pontuação: {score}</span>
            </p>
            <h1>Adivinhe a palavra</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{picketCategory}</span>
            </h3>
            <p>Voce ainda tem {guesses} tentativa(s).</p>
            
            <div className="wordContainer">
                {letters.map((letter,i)=> (
                    guessedLetters.includes(letter) ? (
                        <span key={i} className="letter">{letter}</span>
                    ) : (
                        <span key={i} className="blankSquare"></span>
                    )
                ))}
            </div>

            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra</p>
                <form>
                    <input type="text" name="letter" maxLength="1" required />
                    <button>Jogar!</button>
                </form>
            </div>

            <div className="wrongLetterContainer"></div>
            <p>Letras ja utilizadas</p>
                <span>a</span>
                <span>c</span>
                <span>q</span>


        </div>
    )
}

export default Game