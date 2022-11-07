import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import ImagemPosicao from "../ImagemPosicao"
import { useState } from "react"

const Formulario = (props) => {

  const [nick, setNick] = useState('');
  const [clan, setClan] = useState('');
  const [time, setTime] = useState('');

  const aoSalvar = (evento) => {
  evento.preventDefault()
  props.aoColaboradorCadastrado({
  nick,
  clan,
  time
  })
  setNick('')
  setClan('')
  setTime('')
  }

  return (
  <section className="formulario">
  <form onSubmit={aoSalvar}>
  <h2>Preencha para criar o CardPlayer:</h2>

  <CampoTexto
  obrigatorio={true}
  label="Nick"
  placeholder="Digite seu Nick"
  valor={nick}
  aoAlterado={valor => setNick(valor)}
  />

  <CampoTexto
  obrigatorio={true}
  label="Clan"
  placeholder="Digite seu Clan"
  valor={clan}
  aoAlterado={valor => setClan(valor)}
  />

  <ListaSuspensa
  obrigatorio={true}
  label="Time"
  itens={props.times}
  valor={time}
  aoAlterado={valor => setTime(valor)}
  />

  {time && <ImagemPosicao/>}
  
  <Botao>Criar Card</Botao>
  </form>
  </section>
  )
}

export default Formulario
