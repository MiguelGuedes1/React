const DetalhesCarro = ({marca,ano,cor}) => {   // Destructing Props 
  
  
  
  
    return (
    <div>
        <h2>Detalhes do Veiculo</h2>
        <ul>
            <li>
                marca:{marca}
            </li>
            <li>
                ano:{ano}
            </li>
            <li>
                cor:{cor}
            </li>
        </ul>
     </div>
  )
}

export default DetalhesCarro