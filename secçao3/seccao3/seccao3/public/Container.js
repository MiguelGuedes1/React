const Container=({children})=>{     // Destruturar o componente
    
    
    
    
    return (
        <div className="titulocontainer">
                <h1>Este é o titulo do Container</h1>
                <p> {children} </p>           {/* Este conteudo passa para o app.js por este componente sendo um children */}
        </div>
    )
}

export default Container

