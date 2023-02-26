import { useState } from "react";
import { Link } from "react-router-dom";
import {request} from '../axios/axios.request';

export default function Form({setResponse}) {

    const [uf, setUf] = useState('ma')
    const [cidade, setCidade] = useState('são luis')
    const [rua, setRua] = useState('são josé')

    return(
        <form className="mb-12 text-center mt-36">
            <label>Coloque aqui um endereço para pesquisar</label>
            <div className="flex justify-center items-center px-3 mb-8"> 
                <select className="p-2 rounded-md">
                    <option>MA</option>
                    <option>PA</option>
                    <option>BA</option>
                    <option>US</option>
                </select>
                <Input placeholder='Cidade' change={setCidade}/>
                <Input placeholder='Rua' change={setRua}/>
            </div>
            <div className="flex justify-center items-center">
                <a onClick={() => request(uf,cidade,rua,setResponse)}>Pesquisar</a>
                <Link_button value="Pesquisar por CEP"/>
            </div>
        </form>
    )
}

function Link_button({value}) {
    return(
        <Link to={`/por_CEP`} className="border-2 border-slate-600 px-2 py-1 mx-4 rounded-sm hover:bg-slate-600 hover:text-white mb-5">
            {value}
        </Link>
    )
}


function Input({placeholder,change}) {
    return(
        <div className="relative my-8 mx-4 w-30">
            <input
                placeholder={placeholder}
                onChange={(e) => change(e.target.value)}
                className="p-2 outline-none w-full focus:border-b-slate-600 bg-slate-600/5 rounded-md peer"
            />
        </div>
    )
}