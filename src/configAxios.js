// importando axios
import axios from 'axios';

// criando URL base
const instance = axios.create({
   baseURL: 'https://viacep.com.br/ws'
})

export default instance;