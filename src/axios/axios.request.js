import instance from './axios.config';

// função para fazer a requisição para a API
export async function request(UF,Cidade,Rua,setResponse) {

  const response = await instance.get(`${UF}/${Cidade}/${Rua}/json/`).then(
    console.warn('requisição feita com sucesso')
  ).catch(() => {
    console.warn('houver um erro na requisição')
  })

  setResponse(response.data)

}