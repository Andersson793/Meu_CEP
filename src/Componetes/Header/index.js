// importando estilização
import './index.css';
// importando componentes de React Materialize
import {Row, Col, TextInput, Button, Icon} from 'react-materialize';
// importando request
import { request } from '../../request';
// importando useState do react
import { useState } from 'react';

// componete Header
export default function Header({setResponse}){

   // useStates
   const [UF, setUF] = useState('MA')
   const [cidade, setCidade] = useState('São Luís')
   const [rua, setRua] = useState('São joão')
   console.log(UF,cidade,rua)
   
   return(
      <Row>
         <Col offset='m2' s={12} m={8} className='Header grey lighten-5 z-depth-2 center-align'>
            <Row>
               <Col offset='m2' s={12} m={8}>
                  <header>
                     <h1 className='teal-text'>Pesquisa de CEP</h1>
                     <p>Coloque aqui um endereço para pesquisa.</p>
                  </header>
                  <br/>
                  {/* inputs */}
                  <TextInput
                     label='UF'
                     placeholder='ex. SP'
                     s={12} m={2}
                     onChange={(e) => setUF(e.target.value)}
                  />
                  <TextInput
                     label='Cidade'
                     s={12} m={5}
                     onChange={(e) => setCidade(e.target.value)}
                  />
                  <TextInput 
                     label='Rua'
                     s={12} m={5}
                     onChange={(e) => setRua(e.target.value)}
                  />
                  <Button
                     onClick={() => request(UF,cidade,rua,setResponse)} 
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