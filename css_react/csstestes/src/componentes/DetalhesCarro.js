import styles from "./DetalhesCarro.module.css"

const DetalhesCarro=({carro})=>{

    
    
    return(
        <div className={styles.card}>
                <h1>{carro.marca}</h1>
                <p>Preço: {carro.preco}</p>
                <p>Cor: {carro.cor}</p>
        </div>
    )    
}

export default DetalhesCarro




