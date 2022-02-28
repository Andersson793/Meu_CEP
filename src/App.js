import './App.css';
// importando componetes do React Materialize
import {Row} from 'react-materialize';
// importando componete Header
import Header from './Componetes/Header'

// componete principal
function App() {
  return (
    <Row className="App">
        <Header/>
    </Row>
  );
}

export default App;
