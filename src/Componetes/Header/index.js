// importando estilização
import './index.css'
// importando componentes de React Materialize
import {Row, Col, TextInput, Button, Icon} from 'react-materialize'

export default function Header(){
   return(
      <Row>
         <Col offset='m2' s={12} m={8} className='Header grey lighten-5 z-depth-2 center-align'>
            <Row>
               <Col offset='m2' s={12} m={8}>
                  <h1>Pesquise aqui o seu CEP</h1>
                  <p>Coloque aqui um endereço para pesquisa.</p>
                  <form>
                     <TextInput m={2}/>
                     <TextInput m={5}/>
                     <TextInput m={5}/>
                     <Button waves='light'>
                     Pesquisar
                        <Icon right>search</Icon>
                     </Button>
                  </form>
               </Col>
            </Row>
         </Col>
      </Row>
   );
}