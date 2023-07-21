import Container from '../elements/Container'
import Heading from '../elements/displayTitles/Heading'
import AliceCarousel from 'react-alice-carousel'
import '../../css/carousel.css'
import EventImage1 from '../../medias/images/events/14-juillet.webp'
import EventImage2 from '../../medias/images/events/world-cup.webp'
import EventImage3 from '../../medias/images/events/happy-hour-burger.webp'

const Slide = ({ children, category, title, image, alt }) => {
    return (
        <div className="flex p-2 flex-col md:p-6 lg:flex-row">
            <div className="flex flex-col w-full h-100 md:h-72 lg:h-full lg:basis-1/2 md:p-10">
                <Heading variant="h4">{category}</Heading>
                <Heading theme="secondary" variant="h3" className="mb-5">
                    {title}
                </Heading>
                <p className="tracking-wide test-xs leading-relaxed font-light text-gray-800 flex items-center flex-1 text-center lg:text-left">
                    {children}
                </p>
            </div>
            <div className="h-full w-full flex lg:basis-1/2">
                <img
                    src={image}
                    className="bg-primary w-full h-96 object-cover z-0"
                    alt={alt}
                />
            </div>
        </div>
    )
}
export default function Event() {
    const items = [
        <Slide
            image={EventImage1}
            alt="supporter de l'équipe de france"
            category="évenement à venir"
            title="vivez la demi-finale"
            key={1}
        >
            Venez vivre l&apos;excitation de la Demi-finale de la Coupe du Monde
            avec nous chez BurgerHouse! Rassemblement mémorable pour soutenir la
            France! Joie, émotions, et gourmandise au rendez-vous. Savourez nos
            délicieux burgers, frites croustillantes, et boissons
            rafraîchissantes tout en vivant le match en direct sur écran géant.
            Rejoignez-nous pour une soirée de football inoubliable. Allez les
            Bleus!
        </Slide>,
        <Slide
            image={EventImage2}
            alt="feu d'artifice rouge"
            category="évenement à venir"
            title="Fêtez le 14 Juillet"
            key={2}
        >
            Rejoignez-nous pour une Fête Mémorable le 14 Juillet! Célébrons la
            Bastille et la Gourmandise chez BurgerHouse. Festivités
            exceptionnelles, Délices culinaires et boissons, venez vivre
            l&apos;ambiance festive avec nous! Rassemblement dès le coucher du
            soleil pour une soirée inoubliable en famille ou entre amis.
            Réservez votre place dès maintenant et célébrons tous ensemble la
            joie de l&apos;été!
        </Slide>,
        <Slide
            image={EventImage3}
            alt="burger frites sur une planche"
            category="évenement à venir"
            title="Happy Hour Burger"
            key={3}
        >
            Happy Hour sensationnel chez BurgerHouse! Profitez de réductions
            spéciales sur nos délicieux burgers, frites et boissons.
            Joignez-vous à nous pour un festin savoureux à prix réduit. Ne
            manquez pas cette opportunité! Du lundi au vendredi de 14h a 17h.
        </Slide>,
    ]

    return (
        <Container structure={'section'} className={'eventsSection'}>
            <div className="shadow-2xl lg:mb-12 lg:mt-20">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoPlay
                    autoPlayInterval={4000}
                    infinite
                    disableButtonsControls
                    animationType="fadeout"
                />
            </div>
        </Container>
    )
}
