import hexToRgba from 'hex-to-rgba';
import './Time.css';
import { ITime } from '../../compartilhado/interfaces/ITime';
import { IColaborador } from '../../compartilhado/interfaces/IColaborador';
import Colaborador from '../Colaborador';

interface TimeProps {
  time: ITime
  colaboradores: IColaborador[]
  aoDeletar: (id: string) => void
  mudarCor: (cor: string, id: string) => void
  aoFavoritar: (id: string) => void
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
  return (
    colaboradores.length > 0 ? (
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
              aoFavoritar={aoFavoritar}
              key={colaborador.nome}
              colaborador={colaborador}
              corPrimaria={time.cor}
              aoDeletar={aoDeletar}
            />
          ))}
        </div>
      </section>
    ) : <></>
  );
};

export default Time;
