import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores, aoDeletar }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: corSecundaria,
          backgroundImage: 'url(/imagens/fundo.png)'
        }}
      >
        <h3 style={{ borderColor: corPrimaria }}>{nome} </h3>
        <div className="colaboradores">
          {colaboradores.map(colaborador => (
            <Colaborador
              key={colaborador.nome}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
              imagem={colaborador.imagem}
              corPrimaria={corPrimaria}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
