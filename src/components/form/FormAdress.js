import Input from "./form_buttons/Input";
import FormButtons from "./FormButtons";

//Formulario de pesquisa por endereço
export default function FormAdress() {

    const siglas = ["AC","Al","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG","PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"]

    return(
        <>
            <label>Coloque aqui um endereço para pesquisar</label>
            <div className="mb-20 mt-8"> 
                <select className="px-2 h-10 mr-5 rounded-md">
                    {siglas.map(item => 
                        <option key={item}>
                            {item}
                        </option>
                    )}
                </select>
                <Input style="h-10" placeholder='Cidade' type="text"/>
                <Input style="h-10" placeholder='Rua' type="text"/>
            </div>
            <FormButtons value="Perquisar por CEP" route="/por_CEP" />
        </>
    )
}

//select options