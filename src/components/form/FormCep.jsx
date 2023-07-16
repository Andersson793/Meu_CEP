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
            <div className="flex justify-center items-center mt-10 mb-20">

                <IMaskInput
                    className="p-2 outline-none h-12 focus:border-b-slate-600 bg-slate-600/5 rounded-md text-center my-2"
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
        <div className='flex mt-20 justify-center'>

            <div className="py-2 px-4  mr-5 outline-none focus:border-b-slate-600 bg-slate-600/5 rounded-md text-center">
                <p>{response.localidade}</p>
            </div>
            
            <div className="py-2 px-4 mr-5 outline-none focus:border-b-slate-600 bg-slate-600/5 rounded-md text-center">
                <p>{response.bairro}</p>
            </div>

            <div className="py-2 px-4 mr-5 outline-none focus:border-b-slate-600 bg-slate-600/5 rounded-md text-center">
                <p>{response.logradouro}</p>
            </div>

            <div className="py-2 px-4 mr-5 outline-none focus:border-b-slate-600 bg-slate-600/5 rounded-md text-center">
                <p>{response.cep}</p>
            </div>
            
        </div>
    )
}