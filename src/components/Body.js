import Form from "./Form";
import Table from "./Table";

export default function Body() {
    return(
        <div className="grid grid-cols-9 mt-32 py-6">
            <div className="col-start-3 col-span-5 text-center">
                <h1 className="mb-24 text-3xl text-slate-600">Encontre o seu CEP.</h1>
                <Form/>
                <Table/>
            </div>
        </div>
    )
}