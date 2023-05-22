import { useState } from "react"

const ConditionalRender = () => {
  
  const[x]=useState(false)

  const[nome_utilizador,novonome]=useState("Miguel")
  
  
  
    return (
    <div>
        <h1>isto sera mostrado?</h1>
        {x && <p>se x for true sim!</p>}

        <div>
            <h1>If ternario</h1>                    {/* If ternario=  variavel===x ? (se for verdadeiro faz isto) : (se for falso faz isto) */}
            {nome_utilizador==="Miguel" ? (
                <div>
                    <p>O nome é Miguel</p>
                </div>
            ):
             (
                <div>
                    <p>Nome nao encontrado</p>
                </div>
             
                
            ) }
        </div>
    <button onClick={()=> novonome("Ronaldo")}>Novo Nome</button>
    </div>
    
  )
}

export default ConditionalRender




