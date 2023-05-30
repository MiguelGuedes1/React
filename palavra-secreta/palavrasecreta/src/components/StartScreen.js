import "./StartScreen.css"


const StartScreen=({startGame})=>{
    
    
    return(
        <div className="start">
            <h1>Palavra secreta</h1>
            <p>Clique no botao abaixo para começar a jogar</p>
            <button onClick={startGame}>Começar o jogo</button>
        </div>
    )
}

export default StartScreen