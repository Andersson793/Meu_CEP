

export default function Table({response}) {

    return(
        <>
            <table className="mt-20 table-auto w-full text-left">
                <thead className="border-b-2 border-slate-300">
                    <tr>
                        <th className="px-5 py-2">Cidade</th>
                        <th className="px-5 py-1">Bairro</th>
                        <th className="px-5 py-1">Rua</th>
                        <th className="px-5 py-1">CEP</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {response.map((item) => {
                        return(
                            <tr key={item.cep} className="odd:bg-white even:bg-slate-50 border-b-2 border-slate-100">
                                <td className="px-5 py-3">{item.localidade}</td>
                                <td className="px-5">{item.bairro}</td>
                                <td className="px-5">{item.logradouro}</td>
                                <td className="px-5">{item.cep}</td>
                                <td className="px-5">
                                    <a href={`https://www.google.com/maps/place/${item.bairro},+${item.localidade}+-+MA/`}>map</a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

{/**
link para o google maps >
https://www.google.com/maps/place/Maracanã,+São Luís+-+MA/

*/}