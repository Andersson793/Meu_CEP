export default function Input({placeholder,type}) {
    return(
        <div className="relative my-8 mx-4 w-30">
            <input
                type={"tel"}
                placeholder={placeholder}
                className="p-2 outline-none w-full invalid:bg-red-300 focus:border-b-slate-600 bg-slate-600/5 rounded-md peer"
            />
        </div>
    )
}