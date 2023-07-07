import './Campo.css';

interface CampoProps {
  type?: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week"
  label: string
  placeholder: string
  valor: string
  aoAlterado: (valor: string) => void
  obrigatorio?: boolean
}

const Campo = ({
  type = 'text',
  label,
  placeholder,
  valor,
  aoAlterado,
  obrigatorio = false
}: CampoProps) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        onChange={evento => aoAlterado(evento.target.value)}
        value={valor}
        required={obrigatorio}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
