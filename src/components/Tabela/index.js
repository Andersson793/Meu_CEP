// componete Tabela
export default function Tabela({response}){
   return(
      <>
         {response? <div response={response}></div> : <Esperando/>}
      </>
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
                  <tr key={item.cep}>
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
         <p>Faça uma pesquisa</p>
      </div>
   )
}