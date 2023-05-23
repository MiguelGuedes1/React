// Faça uma renderizaçao condicional que exibe se o usuario pode tirar a carta, imprima isso no componente tambem... a informaçao pode ser exibida num paragrafo ( checkar se idade >=18)

const UserDetails=({nome,idade,profissao})=>{
    
   
    
    
    return(
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        {idade >= 18  ? <p>Pode tirar a carta</p>:<p>Nao pode tirar a carta</p>}
        {profissao ==="Dev FullStack"  ? <p>Vai ser Full stack</p>:<p>Não vai ser Full stack</p>}
    </div>
        
    )
}

export default UserDetails