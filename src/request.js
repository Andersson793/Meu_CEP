// importando instance de configAxios
import instance from './configAxios';

// função para fazer a requisição para a API
export async function request(UF,Cidade,Rua,setResponse,setResponseErro) {
   try {
     const response = await instance.get(`${UF}/${Cidade}/${Rua}/json/`);
     setResponse(response.data);
      setResponseErro(false)
   } catch (error) {
     setResponseErro(true)
   }
}