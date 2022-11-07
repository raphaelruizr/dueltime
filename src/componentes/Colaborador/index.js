import { useState } from "react"
import "./Colaborador.css"

const Colaborador = ({nick, clan, corDeFundo}) => {
    const [data, setData] = useState('')
    
    useState(() => {
    const recebendodeImagemPosicao=sessionStorage.getItem('posicaoselecionada')
    setData(JSON.parse(recebendodeImagemPosicao))
    },[])

    return (
    <div className='colaborador'>

    <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
    <img src={data.imagem} alt={data.nome}/>
    </div>
    
    <div className='rodape'>
    <h4><span>|{clan}|</span> {nick}</h4>
    <h5>{data.nome}</h5>
    </div>
    </div>)
}

export default Colaborador