const Events=()=>{

    const clicar=()=>{         // funçao click
        alert("funciona")
    }

    const renderizar=(x)=>{                                 //funçao que renderiza algo no JSX
        if(x===4){
           return <h1>O x foi activado</h1>
        }else{
           return <h1>O x nao foi activado</h1>
        }
    }

    return(
        <div>
            <div>
                <button onClick={clicar}>Clique aqui</button>       {/*  COMENTARIOS NO JSX TEM QUE SER NESTE FORMATO    */}
            </div>

            <div>
                {renderizar(4)}
            </div>
         
        </div>
    )

    
}

export default Events