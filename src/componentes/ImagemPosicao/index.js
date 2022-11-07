import { useState } from "react"
import "./ImagemPosicao.css"


const ImagemPosicao = () => {
    const [,setSelecionado ] = useState(''); /*tentando conexao apos selecionar a imagem e joga-la em outro component*/
    /*const [selecionado,setSelecionado] apaguei o selecionado pq nao estou usando */
    
    const array =[
        {
        posicao: 'hc',
        nome: 'Hard Carry',
        imagem: 'imagens/r1.png'
        },
        {
        posicao: 'mid',
        nome: 'Mid Lane',
        imagem: 'imagens/r2.png'
        },
        {
        posicao: 'off',
        nome: 'Off Lane',
        imagem: 'imagens/r3.png'
        },
        {
        posicao: 'sup4',
        nome: 'Suporte',
        imagem: 'imagens/r4.png'
        },
        {
        posicao: 'sup5',
        nome: 'Suporte Dedicado',
        imagem: 'imagens/r5.png'
        }
        ]
    
        const fotoselecionada= (event) => { /*tentando conexao apos selecionar a imagem e joga-la em outro component ex: colaborador*/
        const result = array.filter(item => item.posicao === event.target.value);
        setSelecionado(result[0])
        sessionStorage.setItem('posicaoselecionada', JSON.stringify(result[0]) );
        }
       
        return ( 
            <div className='selecaoimagens' onChange={fotoselecionada}>
            {array.map(item=>(
                <label key={item.posicao} htmlFor={item.posicao}>
                <input type='radio' name='funcao' id={item.posicao} value={item.posicao}/>
                <img src={item.imagem}  alt={item.nome}/>
                </label>
            ))}
            </div>
        )
    }
    export default ImagemPosicao

