import instance from './axios.config';

// função para fazer a requisição para a API
export async function request(uf,cidade,rua,setResponse) {

  if(cidade == undefined || rua == undefined)
  {
    alert("Verifique se os campos estão preenchidos corretamente.")
    setResponse(null)
  }
  else
  {
    const response = await instance.get(`${uf}/${cidade}/${rua}/json/`).then(
      console.log('requisição feita com sucesso')
    ).catch(() => {
      alert("Ops, algo deu errado, verifique se os campos estão preenchidos corretamente.")
    })
  
    setResponse(response.data)
  }

}

export async function requestCEP(CEP,setResponse) {

  if (CEP == undefined || CEP.length < 9)
  {
    alert("Verifique se os campos estão preenchidos corretamente.")
    setResponse(null)
  }
  else
  {
    const response = await instance.get(` viacep.com.br/ws/${CEP}/json/ `).then(
      console.log('requisição feita com sucesso')
    ).catch(() => {
      alert("Ops, algo deu errado, verifique se os campos estão preenchidos corretamente.")
    })

    setResponse(response.data)
  }

}