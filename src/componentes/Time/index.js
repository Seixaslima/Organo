import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundColor: hexToRgba(time.cor, '0.6'),
          backgroundImage: 'url(/imagens/fundo.png)'
        }}
      >
        <input
          type="color"
          onChange={evento => mudarCor(evento.target.value, time.id)}
          value={time.cor}
          className="input-cor"
        />
        <h3 style={{ borderColor: time.cor }}>{time.nome} </h3>
        <div className="colaboradores">
          {colaboradores.map(colaborador => (
            <Colaborador
              key={colaborador.nome}
              colaborador={colaborador}
              corPrimaria={time.cor}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
