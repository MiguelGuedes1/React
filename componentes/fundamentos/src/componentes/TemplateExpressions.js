const TemplateExpressions=()=>{
    
    const name= "Miguel Guedes"
    const dados={
        nome:"Miguel Guedes",
        idade:31,
        profissao:"Developer"
    }
    
    return(
        <div>
                <h1>O meu nome é {name} e sou {dados.profissao}</h1>
        </div>
    )
}

export default TemplateExpressions