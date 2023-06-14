import './Colaborador.css';
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({ nome, imagem, cargo, corPrimaria, aoDeletar }) => {
  return (
    <div className="colaborador">
      <AiFillCloseCircle size={25} className="deletar" onClick={aoDeletar} />
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={imagem} alt={nome} />
      </div>
      <div className="corpo">
        <h4>{nome}</h4>
        <h5>{cargo} </h5>
      </div>
    </div>
  );
};

export default Colaborador;
