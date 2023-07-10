import { IMaskInput } from 'react-imask';
import { useRef, useState } from "react";
import FormButtons from './FormButtons';
import { requestCEP } from "../../axios/axios.request";

//Formulario de pesquisa por por CEP
export default function FormCep({}) {

    const [response, setResponse] = useState()

    const ref = useRef(null);
    const inputRef = useRef(null);

    const [CEP, setCEP] = useState();

    return(
        <>
            <label>Coloque aqui um CEP para pesquisar</label>
            <div className="flex justify-center items-center py-9 mb-8">

                <IMaskInput
                    className="p-2 outline-none focus:border-b-slate-600 bg-slate-600/5 rounded-md text-center"
                    mask={"00000-000"}
                    ref={ref}
                    inputRef={inputRef}
                    placeholder='00000-000'

                    onAccept={
                        (value) => setCEP(value)
                    }
                />

            </div>
            <FormButtons value="Perquisar por endereço" route="/" action={() => requestCEP(CEP,setResponse)} />

            {response? <Adresss response={response}/> : console.log('sem resposta')}
        </>
    )
}

function Adresss ({response}){
    return(
        <>
            <p>{response.localidade}</p>
            <p>{response.bairro}</p>
            <p>{response.logradouro}</p>
            <p>{response.cep}</p>
        </>
    )
}