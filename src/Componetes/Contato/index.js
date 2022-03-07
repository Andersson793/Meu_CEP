// importando Ícones
import GitHub from './Icones/placa-do-github.png';
import Linkedin from './Icones/linkedin.png';
import Rede from './Icones/rede.png';
// importando componetes do React Materialize
import {Row, Col} from 'react-materialize'

// componete Contato
export function Contato() {
   return(
      <Row className='Footer'>
         <Col offset='m2' s={12} m={8} className='center-align'>
            <br/>
            <a href='https://github.com/Andersson793'>
               <img alt='GitHub' title='GitHub' src={GitHub}/>
            </a>
            <a href='https://www.linkedin.com/in/andersson-silva-gonçalves-2a6839203'>
               <img alt='Linkedin' title='Linkedin' src={Linkedin}/>
            </a>
            <a href='https://github.com/Andersson793'>
               <img alt='Site pessoal' title='Site pessoal' src={Rede}/>
            </a>
         </Col>
      </Row>
   )
}