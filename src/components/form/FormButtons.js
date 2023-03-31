import { Link } from "react-router-dom";

export default function FormButtons({value,route}) {
    return(
        <>
            <div className="grid grid-cols-6">
                <Search/>
                <Link_button value={value} route={route}/>
            </div>
        </>
    )
}

function Link_button({value,route}) {
    return(
        <Link to={route} className="border-2 py-1 border-slate-600 rounded-lg hover:bg-slate-600 hover:text-white col-start-4 col-span-2">
            {value}
        </Link>
    )
}

function Search() {
    return(
        <input type={"button"} value="Pesquisar" className="border-2 py-1 border-slate-600 rounded-lg hover:bg-slate-600 hover:text-white col-start-2 col-span-1"/>
    )
}