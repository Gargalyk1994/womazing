'use client'

import React, { useState } from 'react'; 
import { cn } from '@/shared/lib/utils';
import { NextButton, PrevButton, DotButton } from '../ui';
import Link from 'next/link';


interface Props {
    className?: string;
}

export const CarouselMain: React. FC<Props> = ({ className }) => {
    const [slideIndex, setSlideIndex] = useState(1);

    const slides = [1, 2, 3];

    const nextSlide = () => {
        if(slideIndex !== slides.length){
            setSlideIndex(slideIndex + 1)
        } 
        else if (slideIndex === slides.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            setSlideIndex(slides.length)
        }
    }

    const moveDot = (index : number) => {
        setSlideIndex(index)
    }

    return (
        <section className={cn(className, "dream-of-team center")}>
            <h2 className="dream-of-team__heading">
                Команда мечты Womazing
            </h2>
            <div className="dream-of-team__wrapper" >
                <div className="dream-of-team__slider">
                    {slides.map((_, index) => (
                        <img 
                            key={index+10}
                            src={`./images/team-slider-image-${index + 1}.png`}
                            alt={`Team${index + 1}`}
                            className={slideIndex === index + 1 ? "dream-of-team__image active-anim" : "dream-of-team__image"}
                        />
                    ))}
                    <PrevButton moveSlide={prevSlide} />
                    <NextButton moveSlide={nextSlide} />
                    <div className="dream-of-team__nav">
                        {Array.from({length: 3}).map((_, index) => (
                            <DotButton
                            key={index}
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dream-of-team__bullitt dot-active" : "dream-of-team__bullitt"}
                            />
                        ))}
                    </div>
                </div>
                <div className="dream-of-team__right-block">
                    <h3 className="dream-of-team__title">Для каждой</h3>
                    <p className="dream-of-team__text">
                        Каждая девушка уникальна. Однако, мы схожи в
                        миллионе мелочей. Womazing ищет эти мелочи и создает
                        прекрасные вещи, которые выгодно подчеркивают
                        достоинства каждой девушки.
                    </p>
                    <Link href="./brand" className="dream-of-team__more">
                        Подробнее о бренде
                    </Link>
                </div>
            </div>
        </section>
    );
};

