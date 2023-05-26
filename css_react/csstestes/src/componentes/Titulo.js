import styles from "./Titulo.module.css"       // o nome do arquivo tem que ser OBRIGATORIAMENTE ->      nome_a_tua_escola.module.css

// este metodo é muito bom porque restrige o css a este componente.... nao vaza para outros componentes ou para o app.js geral

const Titulo=()=>{
    return(
        <div>
              <h3 className={styles.titulo}>Titulo Css modules</h3>  
              <h1 className={styles.titulo_vermelho}>Titulo estilizado com css modules</h1>
        </div>
    )
}

export default Titulo

