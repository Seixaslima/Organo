import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="rodape">
      {/* <img src="./imagens/fundo.png"/> */}
      <ul>
        <li>
          <a href="http://facebook.com/lucas.seixaslima" target="_blanck">
            <img src="./imagens/fb.png" alt="facebook" />
          </a>
        </li>
        <li>
          <img src="./imagens/ig.png" alt="instagram" />
        </li>
        <li>
          <img src="./imagens/tw.png" alt="twitter" />
        </li>
      </ul>
      <div className="logo">
        <img src="./imagens/logo.png" alt="logo" />
      </div>
      <div className="creditos">
        <p>Desenvolvido por</p> <p> Lucas Seixas</p>
      </div>
    </footer>
  );
};

export default Rodape;
