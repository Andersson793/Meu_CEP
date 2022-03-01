// importando estilização
import './index.css'
// importando componentes de React Materialize
import {Row, Col, TextInput, Button, Icon} from 'react-materialize'

// componete Header
export default function Header(){
   return(
      <Row>
         <Col offset='m2' s={12} m={8} className='Header grey lighten-5 z-depth-2 center-align'>
            <Row>
               <Col offset='m2' s={12} m={8}>
                  <header>
                     <h1 className='teal-text'>Pesquise aqui o seu CEP</h1>
                     <p>Coloque aqui um endereço para pesquisa.</p>
                  </header>
                  {/* inputs */}
                  <TextInput label='UF' placeholder='ex. SP' s={12} m={2}/>
                  <TextInput label='Cidade' s={12} m={5}/>
                  <TextInput label='Rua' s={12} m={5}/>
                  <Button waves='light'>
                  Pesquisar
                     <Icon right>search</Icon>
                  </Button>
               </Col>
            </Row>
         </Col>
      </Row>
   );
}