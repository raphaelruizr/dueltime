import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const times = [
  {
  nome:'Radiant',
  corPrimaria:'rgb(0, 90, 0, 0.5)',
  corSecundaria:'rgba(0, 200, 0, 0.05)'
  },    
  {
  nome:'Dire',
  corPrimaria:'rgb(90, 0, 0, 0.5)',
  corSecundaria:'rgba(200, 0, 0, 0.05)'
  }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
  setColaboradores([...colaboradores, colaborador])
  }

  return (
  <div className="App">
  <Banner />
  <Formulario times ={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
  {times.map(time => <Time 
  key={time.nome} 
  nome={time.nome} 
  corPrimaria={time.corPrimaria} 
  corSecundaria={time.corSecundaria}
  colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
  />)}
  <Rodape/>
  </div>
  );
}

export default App;