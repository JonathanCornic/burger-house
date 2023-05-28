import Logo from '../../../media/svg/Logo-burger-house.svg'
import Icone from '../../../media/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
    return (
        <div className="relative z-10 flex items-center justify-between py-10 px-10">
            <div className="w-full">
                <img src={Logo} alt="Burger House App" className="w-64" />
            </div>
            <div className="w-full text-secondary ">
                <div className="flex items-center justify-end">
                    <img src={Icone} alt="" className="w-5 h-5 mr-1" />
                    <span>Commendez votre repas en ligne</span>
                </div>

                <div className=' mt-5 flex items-center justify-end'>
                    <Button className={'bg-primary hover:bg-secondary mr-4'}>
                        Inscription
                    </Button>
                    <Button className={'bg-secondary hover:bg-primary'}>
                        Connexion
                    </Button>
                </div>
            </div>
        </div>
    )
}
