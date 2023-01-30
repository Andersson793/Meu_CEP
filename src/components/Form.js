export default function Form() {
    return(
        <form className="mb-12">
            <label>Coloque aqui um endereço para pesquisar</label>
            <div className="flex justify-center items-center rounded-md px-3 mb-8"> 
                <select className="p-2 rounded-md">
                    <option>MA</option>
                    <option>PA</option>
                    <option>BA</option>
                    <option>US</option>
                </select>
                <Input placeholder='Cidade'/>
                <Input placeholder='Rua'/>
            </div>
            <Button value="Pesquisar"/>
            <Button value="Pesquisar por CEP"/>
        </form>
    )
}

function Button({value}) {
    return(
        <button className="border-2 border-slate-600 px-2 py-1 mx-4 rounded-md hover:bg-slate-600 hover:text-white mb-5">
            {value}
        </button>
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