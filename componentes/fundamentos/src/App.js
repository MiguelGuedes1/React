// componentes

import FirstComponent from './componentes/FirstComponent'
import TemplateExpressions from './componentes/TemplateExpressions'
import Events from './componentes/Events.js'
import Desafio from './componentes/Desafio'



// estilos css


import './App.css';


function App() {
  return (
    <div className="App">
      <p>Bem vindo</p>
        <h1>Fundamentos e componentessss em React</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <Events/>
        <Desafio/>
    </div>
  );
}
 
export default App;
