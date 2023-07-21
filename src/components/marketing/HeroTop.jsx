import Illustration from '../../medias/images/background/bg-food.webp'
import HeroImage from '../../medias/images/heroTop/burger-hero-top.webp'
import Container from '../elements/Container'
import Header from './Header'
import Button from '../elements/Button'

export default function HeroTop() {
    return (
        <div className="bg-primary w-full">
            <div
                className="bg-repeat w-full h-full pb-16 md:pb-24 lg:pb-40"
                style={{ backgroundImage: `url(${Illustration})` }}
            >
                <Container>
                    <Header />
                    <div className="relative w-full mt-6 lg:mt-32">
                        <img
                            src={HeroImage}
                            className="absolute z-0 hidden xl:block xl:-top-64 xl:-right-0 xl:w-6/12 2xl:-top-80 2xl:-right-10 2xl:w-7/12"
                            alt="Un menu hamberger avec frite et coca cola"
                        />
                        <div className="absolute bg-tertiary rounded-full w-44 h-44 p-3 hidden xl:block xl:right-96 xl:top-60">
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

                        <div className="relative z-1 text-secondary uppercase text-center xl:text-left">
                            <h1 className="mb-4 font-medium text-xs md:text-base ">
                                C&apos;est le moment de gouter au bon goût des
                                hambergers.
                            </h1>
                            <h2 className="font-secondary shadowTitleSecondary">
                                <span className="md:text-6xl lg:text-9xl block">
                                    Burger
                                </span>
                                <span className="md:text-3xl lg:text-6xl">
                                    House
                                </span>
                                <span className="md:text-3xl lg:text-5xl ml-3">
                                    Click
                                    <span className="text-tertiary">&</span>
                                    collect
                                </span>
                            </h2>
                        </div>
                    </div>
                    <div className="flex items-center justify-center xl:justify-start">
                        <Button
                            className="mt-5 text-sm md:text-base"
                            color="secondary"
                            theme="big"
                        >
                            Créer mon compte
                        </Button>
                    </div>
                </Container>
            </div>
        </div>
    )
}
