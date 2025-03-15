'use client'

import React, { useState } from 'react'; 
import Link from 'next/link';
import Autoplay from "embla-carousel-autoplay"
import { Carousel, DotButton } from '../ui';
import { slides } from '@/shared/constants/slides';
import { CarouselContent, CarouselItem } from '../ui/carousel';

interface Props {
    className?: string;
}

export const TextCarouselHome: React. FC<Props> = ({ className }) => {

    const [slideIndex, setSlideIndex] = useState(1);
    
    const moveDot = (index : number) => {
        setSlideIndex(index)
    }

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <div className="text-slider"> 
            <Carousel
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}>
                <CarouselContent>
                    {slides.map((slide, i) => (
                        <CarouselItem 
                            key={i+12} 
                            className={slideIndex === i + 1 ? "text-slider__item active-text" : "text-slider__item"}
                        >
                            <h1 className="text-slider__heading">{slide.title}</h1>
                            <h3 className="text-slider__text">{slide.text}</h3>
                        </CarouselItem>
                    ))}
                </CarouselContent>    
            </Carousel>
            <Link href={"./shop"} className="text-slider__btns-box">
                <button className="text-slider__btn-arrow">
                    <svg
                        width="14.716469"
                        height="28.716736"
                        viewBox="0 0 14.7165 28.7167"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs />
                        <path
                            id="Vector9"
                            d="M7.35 0L7.35 28M14.35 20.81L7.35 28L0.35 20.81"
                            stroke="#6E9C9F"
                            strokeOpacity="1.000000"
                            strokeWidth="1.000000"
                        />
                    </svg>
                </button>
                <button className="text-slider__button">
                    Открыть магазин
                </button>
            </Link>
            <div className="text-slider__nav">
                {Array.from({length: 3}).map((_, index) => (
                    <DotButton
                    key={index}
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "text-slider__bullitt dot-active-for-text-slider" : "text-slider__bullitt"}
                    />
                ))}
            </div>
        </div>
    );
};