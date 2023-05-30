/* eslint-disable react/no-unescaped-entities */
import Container from '../../elements/Container'
import Image1 from '../../../media/images/products/LastProducts-1.jpg'
import Image2 from '../../../media/images/products/LastProducts-2.jpg'
import Image3 from '../../../media/images/products/LastProducts-3.jpg'

export default function LastProducts() {
    return (
        <Container>
            <div className="w-full h-96 px-11 my-20 grid grid-cols-2 grid-rows-2 gap-x-9 gap-y-9 uppercase text-white">
                <div className="relative bg-primary h-full rounded-md row-span-2 p-7 cursor-pointer hover:scale-105 animate">
                    <img
                        src={Image1}
                        className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover"
                        alt="Un delicieux hamburger exposé sur un pieces de bois"
                    />
                    <div className="relative z-10">
                        <span className="block font-bold text-lg">
                            Tower Burger
                        </span>
                        <span className="text-2xl font-black">
                            Burger le plus populaire
                        </span>
                    </div>
                </div>
                <div className="relative bg-primary h-full rounded-md p-7 cursor-pointer hover:scale-105 animate">
                    <img
                        src={Image2}
                        className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover"
                        alt="Deux delicieux hamburgers exposés sur un pieces de bois"
                    />
                    <div className="relative z-10">
                        <span className="block font-bold text-lg">
                            Island Burger
                        </span>
                        <span className="block text-2xl font-black">
                            plus de plaisir
                        </span>
                        <span className="text-2xl font-black">
                            plus de goût
                        </span>
                    </div>
                </div>
                <div className="relative bg-primary h-full rounded-md p-7 cursor-pointer hover:scale-105 animate">
                    <img
                        src={Image3}
                        className="absolute top-0 left-0 z-0 rounded-md w-full h-full object-cover"
                        alt="Deux delicieux hamburgers avec sauce et condiments exposés sur un pieces de bois"
                    />
                    <div className="relative z-10">
                        <span className="block font-bold text-lg">
                            Orlando's Burger
                        </span>
                        <span className="text-2xl font-black">
                            frais & pimenté
                        </span>
                    </div>
                </div>
            </div>
        </Container>
    )
}
