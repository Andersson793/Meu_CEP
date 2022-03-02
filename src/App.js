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

// componete principal
function App() {

  // resposta da requisição
  const [response, setResponse] = useState()

  return (
    <Row className="App">
        <Header setResponse={setResponse}/>
        {response? <Tabela response={response}/> : null}
    </Row>
  );
}

export default App;
