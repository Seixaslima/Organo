import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const cadastrarNovoColaborador = colaborador => {
    console.log(colaborador);
    setColaboradores([...colaboradores, colaborador]);
  };
  return (
    <div>
      <Banner />
      <Formulario
        aoNovoColaboradorCadastrado={colaborador =>
          cadastrarNovoColaborador(colaborador)
        }
      />
    </div>
  );
}

export default App;
