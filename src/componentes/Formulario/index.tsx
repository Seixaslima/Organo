import './Formulario.css';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { IColaborador, INovoColaborador } from '../../compartilhado/interfaces/IColaborador';
import { INovoTime, ITime } from '../../compartilhado/interfaces/ITime';
import { Interface } from 'readline';

interface FormularioProps {
  aoNovoColaboradorCadastrado: (novoColaborador: INovoColaborador) => void
  criarNovoTime: (novoTime: INovoTime) => void
  times: string[]
}

const Formulario = (props: FormularioProps) => {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const aoEnviar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoNovoColaboradorCadastrado({ nome, cargo, imagem, time });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  function criarTime(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    props.criarNovoTime({ nome: nomeTime, cor: corTime });
    setNomeTime('');
    setCorTime('');
  }

  return (
    <section className="formulario">
      <form onSubmit={aoEnviar}>
        <Campo
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <Campo
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <Campo
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

      <form onSubmit={evento => criarTime(evento)}>
        <Campo
          obrigatorio
          label="Time"
          placeholder="Digite o nome do novo time"
          valor={nomeTime}
          aoAlterado={valor => setNomeTime(valor)}
        />
        <Campo
          type="color"
          obrigatorio
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
