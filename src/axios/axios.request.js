import instance from './axios.config';

// função para fazer a requisição para a API
export async function request(uf,cidade,rua,setResponse) {

  const response = await instance.get(`${uf}/${cidade}/${rua}/json/`).then(
    console.warn('requisição feita com sucesso')
  ).catch(() => {
    console.warn('houver um erro na requisição')
  })

  setResponse(response.data)

}

export async function requestCEP(CEP,setResponse) {

  const response = await instance.get(` viacep.com.br/ws/${CEP}/json/ `).then(
    console.warn('requisição feita com sucesso')
  ).catch(() => {
    console.warn('houver um erro na requisição')
  })

  setResponse(response.data)

}