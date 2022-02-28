// importando estilização
import './index.css'
// importando componentes de React Materialize
import {Row, Col, Table} from 'react-materialize'

// componete Tabela
export default function Tabela(){
   return(
      <Row>
         <Col offset='m2' s={12} m={8} className='Tabela grey lighten-5 z-depth-2 center-align'>
            <Row>
               <Col s={12} m={12}>
                  <Table className='highlight responsive-table'>
                     {/* cabeça */}
                     <thead>
                        <tr>
                           <th>UF</th>
                           <th>Cidade</th>
                           <th>Rua</th>
                           <th>CEP</th>
                        </tr>
                     </thead>
                     {/* corpo */}
                     <tbody>
                        <tr>
                           <td>MA</td>
                           <td>Rua Emiliano Marcieira</td>
                           <td>São Luís</td>
                           <td>65090-8112</td>
                        </tr>
                        <tr>
                           <td>BA</td>
                           <td>São josé</td>
                           <td>São Luís</td>
                           <td>65090-8112</td>
                        </tr>
                        <tr>
                           <td>PI</td>
                           <td>São josé</td>
                           <td>São Luís</td>
                           <td>65090-8112</td>
                        </tr>
                     </tbody>
                  </Table>
               </Col>
            </Row>
         </Col>
      </Row>
   )
}