import Logo from '../../../media/svg/Logo-burger-house.svg'

export default function Header() {
    return (
        <div className="flex items-center justify-between py-10 px-10">
            <img src={Logo} alt="Burger House App" className="w-64" />
        </div>
    )
}
