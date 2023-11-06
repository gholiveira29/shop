import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

import { styled } from '../styles';
import { HomeContainer, Product } from '../styles/pages/home';

import camisate1 from '../assets/1.png';
import camisate2 from '../assets/2.png';
import camisate3 from '../assets/3.png';
import camisate4 from '../assets/4.png';

import 'keen-slider/keen-slider.min.css';

export default function Home() {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 48,
        },
    });
    return (
        <HomeContainer ref={sliderRef} className="keen-slider">
            <Product className="keen-slider__slide">
                <Image src={camisate1} alt="" width={520} height={480} />

                <footer>
                    <strong>Camiseta 1</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={camisate2} alt="" width={520} height={480} />

                <footer>
                    <strong>Camiseta 2</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={camisate3} alt="" width={520} height={480} />

                <footer>
                    <strong>Camiseta 3</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>

            <Product className="keen-slider__slide">
                <Image src={camisate4} alt="" width={520} height={480} />

                <footer>
                    <strong>Camiseta 4</strong>
                    <span>R$ 79,90</span>
                </footer>
            </Product>
        </HomeContainer>
    );
}
