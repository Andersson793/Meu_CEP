import { useState } from "react";
import {request} from '../axios/axios.request';
import FormAdress from "./forms/FormAdress";
import FormCEP from "./forms/FormCEP";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
  
//rotas
const router = createBrowserRouter([
{
    path: "/",
    element: <FormAdress/>,
},
{
    path: "/por_CEP",
    element: <FormCEP/>
}
]);

export default function Form({setResponse}) {

    const [uf, setUf] = useState('ma')
    const [cidade, setCidade] = useState('são luis')
    const [rua, setRua] = useState('são josé')

    return(
        <form className="mb-12 text-center mt-36">
            <RouterProvider router={router} />
        </form>
    )
}