import { useState } from "react";
import {request} from '../axios/axios.request';
import FormAdress from "./forms/FormAdress";

export default function Form({setResponse}) {

    const [uf, setUf] = useState('ma')
    const [cidade, setCidade] = useState('são luis')
    const [rua, setRua] = useState('são josé')

    return(
        <form className="mb-12 text-center mt-36">
            <FormAdress/>
        </form>
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