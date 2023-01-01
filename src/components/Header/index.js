// importando componentes de React Materialize
import {Row, Col, TextInput, Button, Icon} from 'react-materialize';
// importando request
import { request } from '../../request';
// importando useState do react
import { useState } from 'react';

// componete Header
export default function Header({setResponse, setResponseErro}){

   // useStates
   const [UF, setUF] = useState('')
   const [cidade, setCidade] = useState()
   const [rua, setRua] = useState()
   
   return(
      <Row className='Header'>
         <Col offset='m2' s={12} m={8} className='Header grey lighten-5 z-depth-2 center-align'>
            <Row>
               <Col offset='m2' s={12} m={8}>
                  <header>
                     <h1 className='teal-text'>Pesquisa de CEP</h1>
                     <p>Coloque aqui um endereço para pesquisar.</p>
                  </header>
                  <br/>
                  {/* inputs */}
                  <TextInput
                     name='uf'
                     label='UF'
                     placeholder='ex: SP'
                     s={12} m={2}
                     value={UF}
                     // limita a quantidade de caracteres para o input UF
                     onChange={(e) => {
                        if (e.target.value.length <= 2) {
                           setUF(e.target.value)
                        } else {
                           alert('Utilize apenas a  sigla do seu estado ex: SP')
                        }
                     }}
                  />
                  <TextInput
                     name='cidade'
                     label='Cidade'
                     s={12} m={5}
                     onChange={(e) => setCidade(e.target.value)}
                  />
                  <TextInput
                     name='rua'
                     label='Rua'
                     s={12} m={5}
                     onChange={(e) => setRua(e.target.value)}
                  />
                  <Button
                     onClick={() => request(UF,cidade,rua,setResponse,setResponseErro)} 
                     waves='light'>
                     Pesquisar
                     <Icon right>search</Icon>
                  </Button>
               </Col>
            </Row>
         </Col>
      </Row>
   );
}