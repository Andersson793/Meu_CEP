export default function Input({placeholder,type,style}) {
    return(
        <>
            <input
                className={`${style} py-2 px-1 mr-4 mt-5 outline-none bg-slate-600/5 rounded-md`}
                type={"tel"}
                placeholder={placeholder}
            />
        </>
    )
}