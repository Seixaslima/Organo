import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';

const Formulario = props => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoEnviar = evento => {
    evento.preventDefault();
    props.aoNovoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  function criarTime(evento) {
    evento.preventDefault();
    props.criarNovoTime({ nome: nomeTime, cor: corTime });
    setNomeTime('');
    setCorTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoEnviar}>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Botao>Criar card</Botao>
      </form>

      <form onSubmit={criarTime}>
        <CampoTexto
          obrigatorio={true}
          label="Time"
          placeholder="Digite o nome do novo time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Cor do time"
          placeholder="Digite seu cargo"
          valor={corTime}
          aoAlterado={valor => setCorTime(valor)}
        />

        <Botao>Criar novo time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
