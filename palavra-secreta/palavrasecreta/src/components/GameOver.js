import "./GameOver.css"

const GameOver=({retry})=>{
    return(
        <div>
           <h2>Jogo terminado!! Pontuaçao: xxx</h2>
           <button onClick={retry}>Reiniciar jogo</button>

        </div>
    )
}

export default GameOver

