import { useState } from 'react';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  const [response, setResponse] = useState()
  const [responseErro, setResponseErro] = useState(false)

  return (
    <>
      <Body/>
      <Footer/>
    </>
  );
}

export default App;
