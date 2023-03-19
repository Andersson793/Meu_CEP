export default function Input({placeholder}) {
    return(
        <div className="relative my-8 mx-4 w-30">
            <input
                placeholder={placeholder}
                className="p-2 outline-none w-full focus:border-b-slate-600 bg-slate-600/5 rounded-md peer"
            />
        </div>
    )
}