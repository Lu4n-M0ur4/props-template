/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
function Carro(props) {

  const verificarCombustivel = () =>{
  if(props.dadosCarro.flex === true){
  return "sim"
}else{
   return "não"}
}

  return (
    
    <div>
      <h2>{props.dadosCarro.nome}</h2>
      
      <ul>
        <li>Cor: {props.dadosCarro.cor}</li>
        <li>Ano: {props.dadosCarro.ano}</li>
        <li>Flex: {verificarCombustivel()}</li>
      </ul>
    </div>
  );
}

export default Carro;
