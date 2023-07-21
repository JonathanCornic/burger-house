import Container from '../elements/Container'
import LastProduct1 from '../../medias/images/lastProducts/tower.webp'
import LastProduct2 from '../../medias/images/lastProducts/island.webp'
import LastProduct3 from '../../medias/images/lastProducts/orlandos.webp'

export default function LastProducts() {
    return (
        <Container>
            <div className="w-full px-1 my-16 uppercase text-white gap-x-9 gap-y-9 grid grid-rows-3 md:grid-cols-2 md:grid-rows-2 md:h-96 md:my-20 md:px-11">
                <div className="relative bg-primary h-40 rounded-md p-7 cursor-pointer hover:scale-105 animate md:row-span-2 md:h-full">
                    <img
                        src={LastProduct1}
                        className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover"
                        alt="Un delicieux hamburger exposé sur un pieces de bois"
                    />
                    <div className="relative z-10">
                        <span className="block font-bold md:text-lg">
                            Tower Burger
                        </span>
                        <span className="font-black md:text-2xl">
                            Burger le plus populaire
                        </span>
                    </div>
                </div>
                <div className="relative bg-primary h-40 rounded-md p-7 cursor-pointer hover:scale-105 animate md:h-full">
                    <img
                        src={LastProduct2}
                        className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover"
                        alt="Deux delicieux hamburgers exposés sur un pieces de bois"
                    />
                    <div className="relative z-10">
                        <span className="block font-bold md:text-lg">
                            Island Burger
                        </span>
                        <span className="block font-black md:text-2xl">
                            plus de plaisir
                        </span>
                        <span className="font-black md:text-2xl">
                            plus de goût
                        </span>
                    </div>
                </div>
                <div className="relative bg-primary h-40 rounded-md p-7 cursor-pointer hover:scale-105 animate md:h-full">
                    <img
                        src={LastProduct3}
                        className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover"
                        alt="Deux delicieux hamburgers avec sauce et condiments exposés sur un pieces de bois"
                    />
                    <div className="relative z-10">
                        <span className="block font-bold md:text-lg">
                            Orlando&lapos;s Burger
                        </span>
                        <span className="font-black md:text-2xl">
                            frais & pimenté
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}