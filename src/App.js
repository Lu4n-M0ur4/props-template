/* eslint-disable react/react-in-jsx-scope */
import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const nome = "Luan";

  const nome2 = "Marcos";

  const dadosCarro = {
    nome: "Siena",
    cor: "Vermelho",
    ano: 2013,
    flex: false,
  };
  const dadosCarro1 = {
    nome: "Brasilia",
    cor: "Verde",
    ano: 1995,
    flex: false,
  };
  const dadosCarro2 = {
    nome: "Gol",
    cor: "Verde",
    ano: 2013,
    flex: false,
  };
  const dadosCarro3 = {
    nome: "Onix",
    cor: "Amarelo",
    ano: 2019,
    flex: true,
  };
  const dadosCarro4 = {
    nome: "up",
    cor: "Preto",
    ano: 2013,
    flex: true,
  };

  const apresentaGaragem = (nome) => {
    alert(`Boas vindas a garagem de ${nome}`);
  };

  return (
    <div className="App">
      {/* <Garagem
        dadosCarro={dadosCarro}
        nome={nome}
        apresentaGaragem={apresentaGaragem}
      /> */}
      ;
      <Garagem
        nome={nome2}
        apresentaGaragem={apresentaGaragem}
        dadosCarro={dadosCarro}
        dadosCarro1={dadosCarro1}
        dadosCarro2={dadosCarro2}
        dadosCarro3={dadosCarro3}
        dadosCarro4={dadosCarro4}
      />
    </div>
  );
}
