/* eslint-disable react/no-unescaped-entities */
import Container from '../../elements/Container'
import Heading from '../../elements/displayTitles/Heading'
import HeadingTitle from '../../elements/displayTitles/HeadingTitle'
import Button from '../../elements/Button'
import Image1 from '../../../media/images/products/Product-1.jpg'
import Image2 from '../../../media/images/products/Product-2.jpg'
import Image3 from '../../../media/images/products/Product-3.jpg'
import ContainerFull from '../../elements/ContainerFull'

export default function Products() {
    return (
        <>
            <Container>
                <HeadingTitle>Toujours des délicieux burgers</HeadingTitle>
                <Heading theme="secondary">Choisissez et savourez</Heading>
                <p className="text-center leading-7">
                    Trois délices à savourer : le Tongass, un festival de
                    saveurs sans viande. Le Chicago, pour les amateurs de goût
                    authentique et le Boston, un mariage de recettes
                    emblématiques. Chaque bouchée est une explosion gustative :
                    légumes frais et assaisonnés, viande juteuse ou recette
                    ancestrale. Succombez à ces plaisirs culinaires uniques !
                </p>
            </Container>
            <ContainerFull>
                <div className="grid grid-cols-3 gap-x-1 my-10">
                    <div className="w-full h-full">
                        <div className="relative w-full h-96">
                            <img
                                src={Image1}
                                className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center px-5 pb-5">
                            <Heading variant="h3">Tongass Burger</Heading>
                            <p className="text-center">
                                Un festin végétarien aux saveurs naturelles et
                                épicées, un concerto de saveurs terrestres.
                            </p>
                            <Button className="font-secondary" color="tertiary">
                                Commander
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative w-full h-96">
                            <img
                                src={Image2}
                                className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center px-5 pb-5">
                            <Heading variant="h3">Chicago's Burger</Heading>
                            <p className="text-center">
                                Un délice classique aux saveurs intemporelles,
                                une symphonie de plaisirs gustatifs.
                            </p>
                            <Button className="font-secondary" color="tertiary">
                                Commander
                            </Button>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative w-full h-96">
                            <img
                                src={Image3}
                                className="bg-primary absolute top-0 left-0 w-full h-full object-cover z-0"
                                alt=""
                            />
                        </div>
                        <div className="flex flex-col items-center px-5 pb-5">
                            <Heading variant="h3">Boston Burger</Heading>
                            <p className="text-center">
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
