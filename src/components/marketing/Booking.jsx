import Container from '../elements/Container'
import Heading from '../elements/displayTitles/Heading'
import Image1 from '../../medias/images/background/burger.webp'
import Image2 from '../../medias/images/background/sauce-pimente.webp'
import Image3 from '../../medias/images/background/assiette-burger-frites.webp'
export default function Booking() {
    return (
        <Container structure={'section'} className={'bookingSection'}>
            <div className="relative md:mb-20">
                <img
                    src={Image1}
                    alt="un hamberger"
                    className="absolute w-72 h-72 -top-12 -left-20 z-10 hidden lg:block"
                />
                <img
                    src={Image2}
                    alt="une sauce pimenté"
                    className="absolute   -bottom-10 left-0 hidden lg:block"
                />
                <img
                    src={Image3}
                    alt="une assiette hamberger frites"
                    className="absolute w-80 h-80 rotate-90 -bottom-32 right-0 hidden lg:block"
                />
                <div className="max-w-4xl mx-auto px-10 py-10 md:px-20 md:py-20">
                    <Heading
                        variant="h3"
                        alignement="center"
                        className="text-lg"
                    >
                        Réservation
                    </Heading>
                    <Heading
                        alignement="center"
                        theme="secondary"
                        className="mt-5 text-center"
                    >
                        Réservez votre table
                    </Heading>
                    <form className="gap-x-7 gap-y-6 mt-10 grid md:mt-20 lg:grid-cols-2">
                        <div>
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="John doe"
                                autoComplete="off"
                                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3 md:p-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="John.Doe@example.com"
                                autoComplete="off"
                                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3 md:p-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                name="date"
                                id="date"
                                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3 md:p-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="time">Heure</label>
                            <input
                                type="time"
                                name="time"
                                id="time"
                                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3 md:p-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="customer">
                                Nombre de personnes
                            </label>
                            <input
                                type="number"
                                name="customer"
                                id="customer"
                                placeholder="5"
                                className="focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3 md:p-5"
                            />
                        </div>
                        <div>
                            <label htmlFor="sendBooking" className="invisible">
                                Réserver votre repas
                            </label>
                            <input
                                type="button"
                                name="sendBooking"
                                id="sendBooking"
                                value="Réserver votre repas"
                                className="bg-tertiary hover:bg-tertiary-hover w-full text-white font-secondary tracking-widest relative uppercase p-4 rounded-md cursor-pointer text-xs md:text-base md:p-5"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    )
}
