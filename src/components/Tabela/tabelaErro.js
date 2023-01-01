// importando componentes de React Materialize
import { Row, Col, Icon } from "react-materialize"

// retorna esse componete caso ocorra um erro na requisição
export default function TabelaErro(){
   return(
      <Row className="TabelaErro">
         <Col offset='m2' s={12} m={8} className='Tabela grey lighten-5 z-depth-2 center-align'>
            <Row>
               <Col s={12} m={12}>
                  <Icon large>sentiment_very_dissatisfied</Icon>
                  <p>Ops, algo deu errado</p>
                  <strong>Verifique se os campos estão preenchidos corretamente</strong>
               </Col>
            </Row>
         </Col>
      </Row>
   )
}