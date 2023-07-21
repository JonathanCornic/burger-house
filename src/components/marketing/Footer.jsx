import Container from '../elements/Container'
import Background from '../../medias/images/background/bg-footer.webp'
import WhiteLogo from '../../medias/svg/logo-burger-house-white.svg'
import ContactLogo from '../../medias/svg/contact.svg'
import LocationLogo from '../../medias/svg/location.svg'
import FacebookLogo from '../../medias/svg/facebook.svg'
import InstagramLogo from '../../medias/svg/instagram.svg'
import TwitterLogo from '../../medias/svg/twitter.svg'
import WhatsappLogo from '../../medias/svg/whatsapp.svg'
export default function Footer() {
    return (
        <Container>
            <div className="relative lg:mb-14">
                <img
                    src={Background}
                    alt="burger et sauce sur un plateau"
                    className="w-full object-cover h-100 "
                />
                <div className="absolute z-10 top-0 py-10 px-2 h-full flex flex-col items-center justify-center md:px-10 lg:items-start lg:justify-between">
                    <div>
                        <img
                            src={WhiteLogo}
                            alt="logo en forme de burger"
                            className="w-32 h-10 md:w-96 md:h-24"
                        />
                    </div>
                    <div className="flex flex-col items-center text-white text-xs md:text-sm lg:flex-row">
                        <p className="inline-block text-center mt-10 lg:text-left lg:basis-1/2 lg:pr-20">
                            Chez BurgerHouse, nous sommes passionnés par la
                            qualité et la saveur. Découvrez notre sélection de
                            burgers faits avec des ingrédients frais et
                            savoureux. Commandez en ligne pour une livraison
                            rapide à domicile ou optez pour un repas à emporter.
                            Restez connectés avec nous sur les réseaux sociaux
                            pour ne manquer aucune nouveauté.
                        </p>
                        <div className="uppercase justify-center text-xs md:text-sm lg:basis-1/2">
                            <div className="flex items-center justify-center m-3 lg:ml-48 lg:justify-start">
                                <img
                                    src={LocationLogo}
                                    alt=""
                                    className="w-4 h-4 mr-4 md:w-6 md:h-6 lg:w-8 lg:h-8 lg:mr-8"
                                />
                                <p className="m-0">
                                    15 place de la bourse, 33000 Bordeaux
                                </p>
                            </div>
                            <div className="flex items-center justify-center m-3 lg:ml-48 lg:justify-start">
                                <img
                                    src={ContactLogo}
                                    alt=""
                                    className="w-4 h-4 mr-4 md:w-6 md:h-6 lg:w-8 lg:h-8 lg:mr-8"
                                />
                                <p className="m-0">info@burger-house.fr</p>
                            </div>
                        </div>
                    </div>
                    <div className="uppercase text-white flex flex-col items-center w-full text-xs md:text-sm lg:flex-row lg:justify-between">
                        <p className="mb-10 mt-3 text-center lg:mb-0 lg:mt-0">
                            © BurgerHouse 2023.all rights reserved
                        </p>
                        <div className="flex gap-3 justify-center">
                            <img
                                src={InstagramLogo}
                                alt="logo de instagram"
                                className="bg-white rounded-full w-5 h-5 md:w-10 md:h-10"
                            />
                            <img
                                src={FacebookLogo}
                                alt="logo de facebook"
                                className="bg-white rounded-full w-5 h-5 md:w-10 md:h-10"
                            />
                            <img
                                src={TwitterLogo}
                                alt="logo de twitter"
                                className="bg-white rounded-full w-5 h-5 md:w-10 md:h-10"
                            />
                            <img
                                src={WhatsappLogo}
                                alt="logo de whatsapp"
                                className="bg-white rounded-full w-5 h-5 md:w-10 md:h-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
