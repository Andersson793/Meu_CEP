import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import Table from './components/Table';
import {request} from './axios/axios.request'

function App() {

  const [response, setResponse] = useState()
  const [responseErro, setResponseErro] = useState(false)

  useEffect(() => {
    
  })

  const det = request('ba','salvador','rei',setResponse,setResponseErro)

  console.log(det)

  return (
    <div className="grid grid-cols-9 mt-32 py-6">
      <div className="col-start-3 col-span-5 text-center">
          <h1 className="mb-24 text-3xl text-slate-600">Encontre o seu CEP.</h1>
          <Form/>
          <Table/>
          <Footer/>
      </div>
    </div>
  );
}

export default App;
