import { Link } from "react-router-dom";

export default function Link_button({value,route}) {
    return(
        <Link to={route} className="border-2 py-1 border-slate-600 rounded-lg hover:bg-slate-600 hover:text-white col-start-4 col-span-2">
            {value}
        </Link>
    )
}