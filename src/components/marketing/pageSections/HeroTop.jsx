/* eslint-disable react/no-unescaped-entities */
import Container from '../../elements/Container'
import Illustration from '../../../media/images/background/bg-food.jpg'
import Header from './Header'
import Product from '../../../media/images/heroTop/burger-hero-top.png'
import Button from '../../elements/Button'

export default function HeroTop() {
    return (
        <div className="bg-primary w-full h-screen">
            <div
                className="bg-repeat w-full h-full"
                style={{ backgroundImage: `url(${Illustration})` }}
            >
                <Container>
                    <Header />
                    <div className="relative mt-28 w-full">
                        <img
                            src={Product}
                            className="absolute z-0 -top-64 right-0 w-6/12"
                            alt="Un menu hamberger avec frite et coca cola"
                        />
                        <div className="relative z-1 text-secondary uppercase">
                            <h1 className="mb-4 font-semibold">
                                C'est le moment de gouter au bon goût des
                                hambergers
                            </h1>
                            <h2 className="font-secondary">
                                <span className="text-8xl block">Burger</span>
                                <span className="text-6xl">House</span>
                                <span className="text-4xl ml-3">
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
