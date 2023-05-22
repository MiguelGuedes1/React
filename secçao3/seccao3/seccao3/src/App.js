import './App.css'
import imgprogramador from "./assets/programador.jpg"
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName';


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
</div>




        

  )
}

export default App;
