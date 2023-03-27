export default function Input({placeholder,type,style}) {
    return(
        <>
            <input
                className={`${style} py-2 px-1 outline-none focus:border-b-slate-600 bg-slate-600/5 rounded-md`}
                type={"tel"}
                placeholder={placeholder}
            />
        </>
    )
}