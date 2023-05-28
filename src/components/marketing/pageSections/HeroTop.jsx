import Container from '../../elements/Container'
import Illustration from '../../../media/images/background/bg-food.jpg'

export default function HeroTop() {
    return (
        <div className="bg-primary w-full h-screen">
            <div
                className="bg-repeat w-full h-full"
                style={{ backgroundImage: `url(${Illustration})` }}
            >
                <Container />
            </div>
        </div>
    )
}
