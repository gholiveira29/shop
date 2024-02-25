import { GetStaticProps } from 'next';
import Image from 'next/image';
import Stripe from 'stripe';
import Link from 'next/link';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

import { stripe } from '@/lib/stripe';

import { HomeContainer, Products } from '@/styles/pages/home';
interface HomePros {
    products: {
        id: string;
        name: string;
        imageUrl: string;
        price: number;
    }[];
}

export default function Home({ products }: HomePros) {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 2,
            spacing: 48,
        },
    });

    return (
        <HomeContainer ref={sliderRef} className="keen-slider">
            {products.map((product) => {
                return (
                    <Link href={`/product/${product.id}`} key={product.id}>
                        <Products className="keen-slider__slide">
                            <Image
                                src={product.imageUrl}
                                width={520}
                                height={480}
                                alt=""
                            />

                            <footer>
                                <strong>{product.name}</strong>
                                <span>R$ {product.price}</span>
                            </footer>
                        </Products>
                    </Link>
                );
            })}
        </HomeContainer>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await stripe.products.list({
        expand: ['data.default_price'],
    });

    const products = response.data.map((product) => {
        const price = product.default_price as Stripe.Price;
        return {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: (Number(price.unit_amount) / 100).toFixed(2),
        };
    });
    return {
        props: {
            products,
        },
        revalidate: 60 * 60 * 2, //2horas
    };
};
