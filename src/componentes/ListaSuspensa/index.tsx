import './ListaSuspensa.css'

interface ListaSuspensaProps {
    label: string
    obrigatorio: boolean
    aoAlterado: (valor: string) => void
    // abaixo estou afirmando que itens é uma lista de strings
    itens: string[]
    valor: string
}

const ListaSuspensa = ({obrigatorio, valor, label, itens, aoAlterado}: ListaSuspensaProps) => {
    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select
                onChange={evento => aoAlterado(evento.target.value)}
                required={obrigatorio}
                value={valor}
            >
                <option value=""></option>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa