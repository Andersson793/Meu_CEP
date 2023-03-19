import { Link } from "react-router-dom";

export default function Link_button({value}) {
    return(
        <Link to={`/por_CEP`} className="border-2 border-slate-600 px-2 py-1 mx-4 rounded-sm hover:bg-slate-600 hover:text-white mb-5">
            {value}
        </Link>
    )
}