import './CampoTexto.css';

const CampoTexto = props => {
  console.log(props);
  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={evento => props.aoAlterado(evento.target.value)}
        value={props.valor}
        required={props.obrigatorio}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
