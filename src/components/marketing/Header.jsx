import Logo from '../../medias/svg/logo-burger-house.svg'
import Icone from '../../medias/svg/ico-bag-clickAndCollect.svg'
import Button from '../elements/Button'

export default function Header() {
    return (
        <div className="relative z-10 flex flex-col items-center pt-10 md:pb-10 md:flex-row">
            <div className="w-full flex justify-center md:justify-start">
                <img
                    src={Logo}
                    alt="Burger House App"
                    className="w-72 h-16 md:w-64 md:h-20"
                />
            </div>
            <div className="w-full text-secondary flex flex-col-reverse md:flex-col">
                <div className="flex items-center justify-center mt-5 md:justify-end md:mt-0">
                    <img src={Icone} alt="" className="w-5 h-5 mr-1" />
                    <span className="text-lg font-medium">
                        Commendez votre repas en ligne
                    </span>
                </div>

                <div className=" mt-5 flex items-center justify-center md:justify-end">
                    <Button className="tracking-widest mr-3 text-sm md:text-base" color='tertiary'>
                        Inscription
                    </Button>
                    <Button
                        className="tracking-widest text-sm md:text-base"
                        color="secondary"
                    >
                        Connexion
                    </Button>
                </div>
            </div>
        </div>
    )
}
