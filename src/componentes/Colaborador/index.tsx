import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import './Colaborador.css';
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

interface ColaboradorProps {
  colaborador: IColaborador
  corPrimaria: string
  aoDeletar: (id: string) => void
  aoFavoritar: (id: string) => void
}

const Colaborador = ({ colaborador, corPrimaria, aoDeletar, aoFavoritar }: ColaboradorProps) => {
  function favoritar() {
    aoFavoritar(colaborador.id);
  }
  const propsFavorito = {
    size: 25,
    onClick: favoritar
  };
  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => {
          aoDeletar(colaborador.id);
        }}
      />
      <div className="cabecalho" style={{ backgroundColor: corPrimaria }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className="corpo">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo} </h5>
        <div className="favoritos">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavorito} color="#FF0000" />
          ) : (
            <AiOutlineHeart {...propsFavorito} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
