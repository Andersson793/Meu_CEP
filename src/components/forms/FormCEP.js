export default function PorCEP() {
    return(
        <>
            <form className="mb-12 text-center mt-36">
               <label>Coloque aqui um CEP para pesquisar</label>
                <div className="flex justify-center items-center px-3 mb-8"> 
                    <Input placeholder='CEP'/>
                </div>
               <a>Pesquisar</a>
            </form>
        </>
    )
}


function Input({placeholder}) {
    return(
        <div className="relative my-8 mx-4 w-34">
            <input
                placeholder={placeholder}
                className="p-2 outline-none w-full focus:border-b-slate-600 bg-slate-600/5 rounded-md peer"
            />
        </div>
    )
}