import { Link } from "react-router-dom";

export default function FormAdress() {
    return(
        <>
            <label>Coloque aqui um endereço para pesquisar</label>
            <div className="flex justify-center items-center px-3 mb-8"> 
                <select className="p-2 rounded-md">
                    <option>MA</option>
                    <option>PA</option>
                    <option>BA</option>
                    <option>US</option>
                </select>
                <Input placeholder='Cidade'/>
                <Input placeholder='Rua'/>
            </div>
            <div className="flex justify-center items-center">
                <a>Pesquisar</a>
                <Link_button value="Pesquisar por CEP"/>
            </div>
        </>
    )
}

function Input({placeholder}) {
    return(
        <div className="relative my-8 mx-4 w-30">
            <input
                placeholder={placeholder}
                className="p-2 outline-none w-full focus:border-b-slate-600 bg-slate-600/5 rounded-md peer"
            />
        </div>
    )
}

function Link_button({value}) {
    return(
        <Link to={`/por_CEP`} className="border-2 border-slate-600 px-2 py-1 mx-4 rounded-sm hover:bg-slate-600 hover:text-white mb-5">
            {value}
        </Link>
    )
}