import { ReactElement } from 'react'
import './Botao.css'

// é uma prática comum colocar o pré-fixo I antes do nome da interface
// e o sufixo Props caso trate das props da interface
interface BotaoProps {
    children: ReactElement | string
}

const Botao = (props: BotaoProps) => {
    return (
    <button className='botao'>
        {props.children}
    </button>)
}

export default Botao