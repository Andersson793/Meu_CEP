// importando estilização
import './index.css'
// importando componentes de React Materialize
import {Row, Col, Table, Icon} from 'react-materialize'

// componete Tabela
export default function Tabela({response}){
   return(
      <Row>
         <Col offset='m2' s={12} m={8} className='Tabela grey lighten-5 z-depth-2 center-align'>
            <Row>
               <Col s={12} m={12}>
                  <Table className='highlight responsive-table'>
                     {/* verifica se houve alguma requisição */}
                     {response? <LocalTabela response={response}/> : <Esperando/>}
                  </Table>
               </Col>
            </Row>
         </Col>
      </Row>
   )
}
// componete principal da tabela
function LocalTabela({response}) {
   return(
      <>
         <thead>
            <tr>
               <th>Cidade</th>
               <th>Bairro</th>
               <th>Rua</th>
               <th>CEP</th>
            </tr>
         </thead>
         <tbody>
            {response.map((item) => {
               return(
                  <tr>
                     <td>{item.localidade}</td>
                     <td>{item.bairro+' '+item.complemento}</td>
                     <td>{item.logradouro}</td>
                     <td>{item.cep}</td>
                  </tr>
               )
            })}
         </tbody>
      </>
   )
}

// caso ainda não tenha feito nehuma requisição
function Esperando(){
   return(
      <div>
         <Icon large>search</Icon>
         <p>Faça uma pesquisa</p>
      </div>
   )
}