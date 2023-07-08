import instance from './axios.config';

// função para fazer a requisição para a API
export async function request(uf,cidade,rua,setResponse) {

  const response = await instance.get(`${uf}/${cidade}/${rua}/json/`).then(
    setResponse(response.data)
  ).catch(() => {
    console.warn('houver um erro na requisição')
  })

}