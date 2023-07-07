import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { IColaborador, INovoColaborador } from "./compartilhado/interfaces/IColaborador";
import { INovoTime, ITime } from "./compartilhado/interfaces/ITime";
import timesIniciais from './json/times.json'
import colaboradoresIniciais from './json/colaboradores.json'

function App() {

  const [times, setTimes] = useState<ITime[]>(timesIniciais);


  const [colaboradores, setColaboradores] = useState<IColaborador[]>(colaboradoresIniciais);

  function deletarColaborador(id: string) {
    setColaboradores(
      colaboradores.filter(colaborador => colaborador.id !== id)
    );
  }

  const cadastrarNovoColaborador = (colaborador: INovoColaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: uuidv4(), favorito: false }]);
  };

  function mudarCorTime(cor: string, id: string) {
    setTimes(
      times.map(time => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function criarTime(novoTime: INovoTime) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id: string) {
    setColaboradores(
      colaboradores.map(colaborador => {
        if (colaborador.id === id) {
          colaborador.favorito = !colaborador.favorito;
        }
        return colaborador;
      })
    );
  }

  return (
    <div>
      <Banner
        enderecoImagem="/imagens/banner.png"
        textoAlternativo="imagem do banner principal"
      />
      <Formulario
        times={times.map(time => time.nome)}
        aoNovoColaboradorCadastrado={colaborador =>
          cadastrarNovoColaborador(colaborador)
        }
        criarNovoTime={novoTime => criarTime(novoTime)}
      />
      {times.map(time => (
        <Time
          aoFavoritar={resolverFavorito}
          key={time.nome}
          time={time}
          mudarCor={mudarCorTime}
          aoDeletar={deletarColaborador}
          colaboradores={colaboradores.filter(
            colaborador => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
