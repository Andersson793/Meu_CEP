import './App.css';
// importando componetes do React Materialize
import {Row} from 'react-materialize';
// importando componete Header
import Header from './Componetes/Header'
// importando componete Table
import Tabela from './Componetes/Tabela'

// componete principal
function App() {
  return (
    <Row className="App">
        <Header/>
        <Tabela/>
    </Row>
  );
}

export default App;
