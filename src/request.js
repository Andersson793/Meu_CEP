// importando instance de configAxios
import instance from './configAxios';

// função para fazer a requisição para a API
export async function request(UF,Cidade,Rua,setResponse) {
   try {
     const response = await instance.get(`${UF}/${Cidade}/${Rua}/json/`);
     setResponse(response.data);
   } catch (error) {
     console.error(error);
   }
}