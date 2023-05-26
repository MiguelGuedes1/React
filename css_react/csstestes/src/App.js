import './App.css';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import Titulo from './componentes/Titulo';
import DetalhesCarro from './componentes/DetalhesCarro';


let x=20
let titulo_vermelho=true



function App() {

  const carros=[
    {
        id:1,
        marca:"Ferrari",
        preco:100000,
        cor:"vermelho"
    },
    {
        id:2,
        marca:"Renault",
        preco:10000,
        cor:"Preto"
    },
    {
        id:3,
        marca:"Fiat",
        preco:25000,
        cor:"Azul"
    }
  ]
  return (
    <div className="App">
        <h1>Css no react</h1>
        <PrimeiroComponente/>

        {/* Css inline dinamico */}
          <h2 style={x>50 ? ({
            color:"blue"
          }) : ({
            color:"pink"
          })}>Css inline dinamico</h2>

          {/* Classes dinamicas */}
            <h2 className={titulo_vermelho ? "redtitle":"bluetitle"}>Este titulo vai ter uma classe dinamica</h2>                {/* Consoante a variavel é verdade ou nao o titulo muda de cor */}

          {/* Css Modules */}

          <Titulo/>

          {/* Desafio CSS */}
          <h1>Montra de carros</h1>
          <div className="carro-container">
            {carros.map((carro)=>(
                
          <DetalhesCarro carro={carro}/>
            ))}

          </div>









    </div>
  );
}

export default App;
