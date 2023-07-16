import { Link } from "react-router-dom";

export default function FormButtons({value,route,action}) {
    return(
        <div>
            <Search action={action}/>
            <Link_button value={value} route={route}/>
        </div>
    )
}

function Search({action}) {
    return(
        <input 
            type={"button"}
            value="Pesquisar" className="border-2  py-2 px-5 mb-5 border-slate-600 rounded-md hover:bg-slate-600 hover:text-white cursor-pointer"
            onClick={() =>  action()}
        />
    )
}

function Link_button({value,route}) {
    return(
        <div>
            <Link 
                to={route}
            >
                <a className="text-cyan-950">{value}</a>
            </Link>
        </div>
    )
}