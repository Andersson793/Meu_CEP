import { Link } from "react-router-dom";

export default function FormButtons({value,route}) {
    return(
        <>
            <div className="flex justify-center">
                <Search/>
                <Link_button value={value} route={route}/>
            </div>
        </>
    )
}

function Search() {
    return(
        <input 
            type={"button"}
            value="Pesquisar" className="border-2  h-9 px-3 mr-11 border-slate-600 rounded-lg hover:bg-slate-600 hover:text-white cursor-pointer"
        />
    )
}

function Link_button({value,route}) {
    return(
        <Link 
            to={route}
        >
            <input 
                type={"button"}
                className="border-2 px-3 h-9 border-slate-600 rounded-lg hover:bg-slate-600 hover:text-white cursor-pointer"
                value={value}
            />
        </Link>
    )
}