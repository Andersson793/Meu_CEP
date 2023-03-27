import Link_button from "./form_buttons/LinkButton"
import Search from "./form_buttons/search"
import Input from "./form_buttons/Input"
import { IMaskInput } from 'react-imask';
import { useRef } from "react";

//Formulario de pesquisa por por CEP

export default function PorCEP() {

    const ref = useRef(null);
    const inputRef = useRef(null);

    return(
        <>
            <form className="mb-12 text-center mt-36">
               <label>Coloque aqui um CEP para pesquisar</label>
                <div className="flex justify-center items-center py-9 mb-8">

                    <IMaskInput
                        className="p-2 outline-none w-1/2 focus:border-b-slate-600 bg-slate-600/5 rounded-md"
                        mask={"00000-000"}
                        ref={ref}
                        inputRef={inputRef}
                        onAccept={
                            (value, mask) => console.log(value, mask.masked.mask)
                        }

                        placeholder='00000-000'
                    />

                </div>
               <Search value="Pesquisar"/>
               <Link_button value="Pesquisar por endereço" route="/"/>
            </form>
        </>
    )
}