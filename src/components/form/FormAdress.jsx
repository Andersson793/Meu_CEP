import Input from "./form_buttons/Input";
import FormButtons from "./FormButtons";
import { useState } from "react";
import { request } from "../../axios/axios.request";
import Table from "../Table";

//Formulario de pesquisa por endereço
export default function FormAdress({}) {

    const [response, setResponse] = useState()

    const siglas = [
        {index: 0, estado: "Acre", sigla: "AC"},
        {index: 1, estado: "Alagoas", sigla: "AL"},
        {index: 2, estado: "Amapá", sigla: "AP"},
        {index: 3, estado: "Amazonas", sigla: "AM"},
        {index: 4, estado: "Bahia", sigla: "BA"},
        {index: 5, estado: "Ceará", sigla: "CE"},
        {index: 6, estado: "Distrito Federal", sigla: "DF"},
        {index: 7, estado: "Espírito Santo", sigla: "ES"},
        {index: 8, estado: "Goiás", sigla: "GO"},
        {index: 9, estado: "Maranhão", sigla: "MA"},
        {index: 10, estado: "Mato Grosso", sigla: "MT"},
        {index: 11, estado: "Mato Grosso do sul", sigla: "MS"},
        {index: 12, estado: "Minas Gerais", sigla: "MG"},
        {index: 13, estado: "Pará", sigla: "PA"},
        {index: 14, estado: "Paraíba", sigla: "PB"},
        {index: 15, estado: "Paraná", sigla: "PR"},
        {index: 16, estado: "Pernanbuco", sigla: "PE"},
        {index: 17, estado: "Piauí", sigla: "PI"},
        {index: 18, estado: "Rio de Janeiro", sigla: "RJ"},
        {index: 19, estado: "Rio Grande do Norte", sigla: "RN"},
        {index: 20, estado: "Rio Grnade do Sul", sigla: "RS"},
        {index: 21, estado: "Rondônia", sigla: "RO"},
        {index: 22, estado: "Roraima", sigla: "RR"},
        {index: 23, estado: "Santa Catarina", sigla: "SC"},
        {index: 24, estado: "São Paulo", silga: "SP"},
        {index: 25, estado: "Sergipe", sigla: "SE"},
        {index: 26, estado: "Tocantis", sigla: "TO"}
    ]

    const [uf, setUf] = useState("AC");
    const [cidade, setCidade] = useState()
    const [rua, setRua] = useState()

    return(
        <>
            <label>Coloque aqui um endereço para pesquisar</label>
            <div className="mb-20 mt-10"> 
                <select className="px-3 h-12 mr-5 rounded-md my-2" onChange={(e) => setUf(e.target.value)}>
                    {siglas.map(item => 
                        <option key={item.index} label={item.estado} value={item.sigla}></option>
                    )}
                </select>
                <Input style="h-12 mr-5" placeholder='Cidade' setValue={setCidade}/>
                <Input style="h-12 mr-5" placeholder='Rua' setValue={setRua}/>
            </div>
            <FormButtons value="Perquisar por CEP" route="/por_CEP" action={() => request(uf,cidade,rua,setResponse)} />

            {response? <Table response={response} /> : console.log("sem resposta") }
        </>
    )
}