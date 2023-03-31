import { useState } from "react";
import {request} from '../../axios/axios.request';
import FormAdress from './FormAdress';
import FormCep from './FormCep'

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
    element: <FormCep/>
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