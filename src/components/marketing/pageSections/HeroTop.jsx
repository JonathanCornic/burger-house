/* eslint-disable react/no-unescaped-entities */
import Container from '../../elements/Container'
import Illustration from '../../../media/images/background/bg-food.jpg'
import Header from './Header'
import Product from '../../../media/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'

export default function HeroTop() {
    return (
        <div className="bg-primary w-full">
            <div
                className="bg-repeat w-full h-full pb-40"
                style={{ backgroundImage: `url(${Illustration})` }}
            >
                <Container>
                    <Header />
                    <div className="relative mt-32 w-full">
                        <img
                            src={Product}
                            className="absolute z-0 -top-80 -right-10 w-7/12"
                            alt="Un menu hamberger avec frite et coca cola"
                        />
                        <div className="absolute right-100 top-60 bg-tertiary rounded-full w-44 h-44 p-3">
                            <div className="w-full h-full rounded-full border-4 border-dashed border-white text-white flex items-center justify-center">
                                <div className="text-center">
                                    <span className="block font-extrabold">
                                        <span className="text-5xl">5</span>.49€
                                    </span>
                                    <span className="tracking-widest uppercase text-sm">
                                        seulement
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-1 text-secondary uppercase">
                            <h1 className="mb-4 font-medium">
                                C'est le moment de gouter au bon goût des
                                hambergers.
                            </h1>
                            <h2 className="font-secondary shadowTitleSecondary">
                                <span className="text-9xl block">Burger</span>
                                <span className="text-6xl">House</span>
                                <span className="text-5xl ml-3">
                                    Click
                                    <span className="text-tertiary">&</span>
                                    collect
                                </span>
                            </h2>
                        </div>
                    </div>
                    <Button className="mt-5" color="secondary" theme="big">
                        Créer mon compte
                    </Button>
                </Container>
            </div>
        </div>
    )
}
