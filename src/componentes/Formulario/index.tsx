import './Formulario.css';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';
import { useState } from 'react';
import { INovoColaborador } from '../../compartilhado/interfaces/IColaborador';
import { INovoTime } from '../../compartilhado/interfaces/ITime';

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
  const [data, setData] = useState('')
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('#000000');

  const aoEnviar = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    props.aoNovoColaboradorCadastrado({ nome, cargo, imagem, time, data });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  function criarTime(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    props.criarNovoTime({ nome: nomeTime, cor: corTime });
    setNomeTime('');
    setCorTime('#000000');
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
        <Campo
          label='Data de entrada no time'
          placeholder=''
          valor={data}
          aoAlterado={valor => { console.log(valor); setData(valor) }}
          type='date'
          obrigatorio={true}
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
