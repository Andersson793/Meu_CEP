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
// importando componete Contato
import {Contato} from './Componetes/Contato';

// componete principal
function App() {

  // resposta da requisição
  const [response, setResponse] = useState()
  // observa se houve erro na requisição 
  const [responseErro, setResponseErro] = useState(false)

  return (
    <Row className="App center-align">
        <Header setResponse={setResponse} setResponseErro={setResponseErro}/>
        {/* verifica se houve sucesso na requisição */}
        {responseErro?  <TabelaErro/> : <Tabela response={response}/>}
        <i>Resutados gerados por ViaCep API</i>
        <Contato/>      
    </Row>
  );
}

export default App;
