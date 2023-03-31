import Input from "./form_buttons/Input";
import FormButtons from "./FormButtons";

//Formulario de pesquisa por endereço

export default function FormAdress() {
    return(
        <>
            <label>Coloque aqui um endereço para pesquisar</label>
            <div className="grid grid-cols-12 mb-20 mt-8"> 
                <select className="col-span-2 text-center rounded-md">
                    <option>MA</option>
                    <option>PA</option>
                    <option>BA</option>
                    <option>US</option>
                </select>
                <Input style="col-start-4 col-span-4" placeholder='Cidade' type="text"/>
                <Input style="col-start-9 col-span-4" placeholder='Rua' type="text"/>
            </div>
            <FormButtons value="Perquisar por CEP" route="/por_CEP" />
        </>
    )
}