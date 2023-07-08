import Input from "./form_buttons/Input";
import FormButtons from "./FormButtons";
import { useState } from "react";
import { request } from "../../axios/axios.request";

//Formulario de pesquisa por endereço
export default function FormAdress({setResponse}) {

    const siglas = ["AC","Al","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]

    const [uf, setUf] = useState("MA");
    const [cidade, setCidade] = useState("Sâo Luís")
    const [rua, setRua] = useState("São josé")

    return(
        <>
            <label>Coloque aqui um endereço para pesquisar</label>
            <div className="mb-20 mt-8"> 
                <select className="px-2 h-10 mr-5 rounded-md" onChange={(e) => setUf(e.target.value)}>
                    {siglas.map(item => 
                        <option key={item}>
                            {item}
                        </option>
                    )}
                </select>
                <Input style="h-10" placeholder='Cidade' setValue={setCidade}/>
                <Input style="h-10" placeholder='Rua' setValue={setRua}/>
            </div>
            <FormButtons value="Perquisar por CEP" route="/por_CEP" action={() => request(uf,cidade,rua,setResponse)} />
        </>
    )
}