import './ListaSuspensa.css';

interface ListaSuspensaProps {
  label: string
  obrigatorio: boolean
  valor: string
  aoAlterado: (valor: string) => void
  itens: string[]
}

const ListaSuspensa = (props: ListaSuspensaProps) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        required={props.obrigatorio}
        value={props.valor}
        onChange={evento => props.aoAlterado(evento.target.value)}
      >
        <option key="" />
        {props.itens.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
