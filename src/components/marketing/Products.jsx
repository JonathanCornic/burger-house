import Container from '../elements/Container'
import ContainerFull from '../elements/ContainerFull'
import Heading from '../elements/displayTitles/Heading'
import HeadingTitle from '../elements/displayTitles/HeadingTitle'
import Button from '../elements/Button'
import Product1 from '../../medias/images/products/tongass.webp'
import Product2 from '../../medias/images/products/chicagos.webp'
import Product3 from '../../medias/images/products/boston.webp'

export default function Products() {
    return (
        <>
            <Container structure={'section'} className={'infoProductSection'}>
                <HeadingTitle>Toujours des délicieux burgers</HeadingTitle>
                <Heading
                    theme="secondary"
                    alignement="center"
                    className="my-5 mt-10"
                >
                    Choisissez et savourez
                </Heading>
                <p className="text-center leading-7 text-xs px-10 md:text-base md:px-32 lg:text-lg lg:px-0 ">
                    Trois délices à savourer : le Tongass, un festival de
                    saveurs sans viande. Le Chicago, pour les amateurs de goût
                    authentique et le Boston, un mariage de recettes
                    emblématiques. Chaque bouchée est une explosion gustative :
                    légumes frais et assaisonnés, viande juteuse ou recette
                    ancestrale. Succombez à ces plaisirs culinaires uniques !
                </p>
            </Container>
            <ContainerFull className={'productsSection'}>
                <div className="grid gap-x-1 gap-y-5 my-10 lg:grid-cols-3 lg:px-0 lg:gap-y-0">
                    <div>
                        <div className="relative m-auto w-72 h-72 md:w-100 md:h-100 lg:w-full lg:h-96">
                            <img
                                src={Product1}
                                className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
                                alt="un hamburger en gros plan"
                            />
                        </div>
                        <div className="flex flex-col items-center px-5 pb-5">
                            <Heading variant="h3" className="lg:my-5">
                                Tongass Burger
                            </Heading>
                            <p className="text-center h-10 flex items-center text-xs md:text-lg md:h-20 md:px-48 lg:px-0">
                                Un festin végétarien aux saveurs naturelles et
                                épicées, un concerto de saveurs terrestres.
                            </p>
                            <Button className="font-secondary" color="tertiary">
                                Commander
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className="relative m-auto w-72 h-72 md:w-100 md:h-100 lg:w-full lg:h-96">
                            <img
                                src={Product2}
                                className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
                                alt="un hamburger en gros plan"
                            />
                        </div>
                        <div className="flex flex-col items-center px-5 pb-5">
                            <Heading variant="h3" className="lg:my-5">
                                Chicago&apos;s Burger
                            </Heading>
                            <p className="text-center h-10 flex items-center text-xs md:text-lg md:h-20 md:px-48 lg:px-0">
                                Un délice classique aux saveurs intemporelles,
                                une symphonie de plaisirs gustatifs.
                            </p>
                            <Button className="font-secondary" color="tertiary">
                                Commander
                            </Button>
                        </div>
                    </div>
                    <div>
                        <div className="relative m-auto w-72 h-72 md:w-100 md:h-100 lg:w-full lg:h-96">
                            <img
                                src={Product3}
                                className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
                                alt="un hamburger en gros plan"
                            />
                        </div>
                        <div className="flex flex-col items-center px-5 pb-5">
                            <Heading variant="h3" className="lg:my-5">
                                Boston Burger
                            </Heading>
                            <p className="text-center h-10 flex items-center text-xs md:text-lg md:h-20 md:px-48 lg:px-0">
                                Une expérience rustique, pour des plaisirs
                                authentiques, une sonate délicieuse.
                            </p>
                            <Button className="font-secondary" color="tertiary">
                                Commander
                            </Button>
                        </div>
                    </div>
                </div>
            </ContainerFull>
        </>
    )
}
