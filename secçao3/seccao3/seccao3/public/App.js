import './App.css'
import imgprogramador from "./assets/programador.jpg"
import ListRender from './components/ListRender'
import ManageData from './components/ManageData'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import DetalhesCarro from './components/DetalhesCarro'
import { Fragment } from 'react'
import Fragments from './components/Fragments'
import Container from './components/Container'


function App() {
  return (
<div className="App">
        <h1>Avançando com react</h1>
       
       { /* inserir imagens do public */ }
          <div>
            <img src="logo192.png" alt="logo" />
          </div>

       {/* inserir imagens pelo src -- assets */ }

          <div>
              <img src={imgprogramador} alt="programador" />
          </div>

          <ManageData/>

          <ListRender/>

          <ConditionalRender/>

          <ShowUserName nome="Mike Dev"/>    { /* Utilizar props */}

          { /* Props Destructuring*/}

          <DetalhesCarro marca="Bmw" ano={2019} cor="Preto"/>

          { /* Reaproveitar componentes*/}

          <DetalhesCarro marca="Mercedes" ano={2022} cor="Azul"/>
          <DetalhesCarro marca="Renault" ano={2010} cor="Branco"/>

          { /* Fragments em React*/}
          
          <Fragments/>

          { /* Children*/}

          <Container> 
                <p> E este é o conteudo children</p>
           </Container>








 </div>
        





        

  )
}

export default App;
