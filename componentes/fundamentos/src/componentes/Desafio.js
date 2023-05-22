const Desafio=()=>{

    let numero1=10
    let numero2=90
    const resultado=numero1+numero2

    const clicar=()=>{
        console.log("O resultado da soma é ",resultado)
    }

return(
            <div>
                  <button onClick={clicar}></button>
            </div>
    )
}


export default Desafio

