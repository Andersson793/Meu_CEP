export default function Table() {
    return(
        <>
            <table className="table-auto w-full text-left">
                <thead className="border-b-2 border-slate-300">
                    <th className="px-5 py-2">Cidade</th>
                    <th className="px-5 py-1">Bairro</th>
                    <th className="px-5 py-1">Rua</th>
                    <th className="px-5 py-1">CEP</th>
                </thead>
                <tbody>
                    <tr className="odd:bg-white even:bg-slate-50 border-b-2 border-slate-100">
                        <td className="px-5 py-3">São Luís</td>
                        <td className="px-5">Vila Primavera</td>
                        <td className="px-5">São josé</td>
                        <td className="px-5">65090-812</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50 border-b-2 border-slate-100">
                        <td className="px-5 py-3">São Luís</td>
                        <td className="px-5">Vila Primavera</td>
                        <td className="px-5">São josé</td>
                        <td className="px-5">65090-812</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50 border-b-2 border-slate-100">
                        <td className="px-5 py-3">São Luís</td>
                        <td className="px-5">Vila Primavera</td>
                        <td className="px-5">São josé</td>
                        <td className="px-5">65090-812</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-slate-50 border-b-2 border-slate-100">
                        <td className="px-5 py-3">São Luís</td>
                        <td className="px-5">Vila Primavera</td>
                        <td className="px-5">São josé</td>
                        <td className="px-5">65090-812</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}