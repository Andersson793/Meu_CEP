// importando folha de estilo
import './App.css';
// importando componetes do React Materialize
import { Row } from 'react-materialize';
// importando componete Header
import Header from './Componetes/Header';
// importando componete Tabela
import Tabela from './Componetes/Tabela';
// importando useState do React
import { useState } from 'react';
// importando componente TabelaErro
import TabelaErro from './Componetes/Tabela/tabelaErro';

// componete principal
function App() {

  // resposta da requisição
  const [response, setResponse] = useState()
  const [responseErro, setResponseErro] = useState(false)

  return (
    <Row className="App">
        <Header setResponse={setResponse} setResponseErro={setResponseErro}/>
        {/* verifica se hove sucesso na requisição */}
        {responseErro?  <TabelaErro/> : <Tabela response={response}/>}
        
    </Row>
  );
}

export default App;
