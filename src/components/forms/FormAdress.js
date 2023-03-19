import Input from "./form_buttons/Input";
import Link_button from "./form_buttons/LinkButton";

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