export default function Input({placeholder,style,setValue}) {
    return(
        <>
            <input
                className={`${style} py-2 px-2 my-2 outline-none bg-slate-600/5 rounded-md`}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                
            />
        </>
    )
}