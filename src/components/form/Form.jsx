import FormCep from './FormCep';
import FormAdress from './FormAdress';

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

export default function Form({}) {

    return(
        <form className="mb-12 text-center mt-36">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<FormAdress/>}/>
                    <Route path='/por_CEP' element={<FormCep/>}/>
                </Routes>
            </BrowserRouter>
        </form>
    )

}