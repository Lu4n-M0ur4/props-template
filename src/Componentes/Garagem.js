/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Carro from "./Carro";

function Garagem({ nome, apresentaGaragem, dadosCarro,dadosCarro1,dadosCarro2,dadosCarro3,dadosCarro4 }) {
 

  return (
    <div>
      <h1>Garagem de {nome}</h1>
      <Carro dadosCarro={dadosCarro1} />;
      <Carro dadosCarro={dadosCarro1} />;
      <Carro dadosCarro={dadosCarro2} />;
      <Carro dadosCarro={dadosCarro3} />;
      <Carro dadosCarro={dadosCarro4} />;

      <button onClick={() => apresentaGaragem(nome)}>Botao</button>
    </div>
  );
}

export default Garagem;
