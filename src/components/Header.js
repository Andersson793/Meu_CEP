import GitHub from '../assets/placa-do-github.png'
export default function Header() {
    return(
        <div className='flex justify-around py-2 bg-neutral-100 drop-shadow-md'>
            <p>LOGO</p>
            <img src={GitHub} className="h-8" />
        </div>
    )
}