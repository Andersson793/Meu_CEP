import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Form from './components/form/Form'
import Table from './components/Table';

function App() {

  const [response, setResponse] = useState()

  return (
    <div className="grid grid-cols-11 mt-32 py-6">
      <div className="col-start-4 col-span-5 text-center">
          <h1 className="mb-24 text-3xl text-slate-600">Encontre o seu CEP.</h1>
          <Form setResponse={setResponse}/>
            {response? <Table response={response}/> : console.log('no response')}
          <Footer/>
      </div>
    </div>
  )
}

export default App;