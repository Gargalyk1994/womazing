'use client'

import React from 'react'; 
import { cn } from '@/shared/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from '../ui/embla-dots';
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from '../ui/embla-arrow-buttons';
import useEmblaCarousel from 'embla-carousel-react';

interface Props {
    options?: EmblaOptionsType;
    className?: string;
}

export const CarouselMain: React. FC<Props> = ({ options, className }) => {
    const slides = [0, 1, 2 ];
    const [emblaRef, emblaApi] = useEmblaCarousel(options);

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi);

    return (
        <section className={cn(className, "dream-of-team center")}>
            <h2 className="dream-of-team__heading">
                Команда мечты Womazing
            </h2>
            <div className="dream-of-team__wrapper">
                <div className="dream-of-team__slider" ref={emblaRef}>
                    <div className="dream-of-team__images">
                        {slides.map((index) => (
                            <img 
                                key={index}
                                src={`./images/team-slider-image-${index + 1}.png`}
                                alt="Team${index + 1}"
                                className="dream-of-team__image"
                            />
                        ))}
                    </div>
                    <div className="dream-of-team__buttons">
                        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                        <div className="dream-of-team__nav">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                key={index}
                                onClick={() => onDotButtonClick(index)}
                                // className={'embla__dot'.concat(
                                //     index === selectedIndex ? '' : ''
                                // )}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* <div className="embla__controls">
                        <div className="embla__buttons">
                          
                        </div>
                        
                    </div> */}
                    {/* <PaginationEllipsis className="dream-of-team__nav">

                        <button className="dream-of-team__bullitt">
                            <svg
                                width="30.000000"
                                height="4.000000"
                                viewBox="0 0 30 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <rect
                                    id="Rectangle22"
                                    width="30.000000"
                                    height="4.000000"
                                    fill="#D1D1D1"
                                    fillOpacity="1.000000"
                                />
                            </svg>
                        </button>
                        <button className="dream-of-team__bullitt">
                            <svg
                                width="30.000000"
                                height="4.000000"
                                viewBox="0 0 30 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <rect
                                    id="Rectangle33"
                                    width="30.000000"
                                    height="4.000000"
                                    fill="#D1D1D1"
                                    fillOpacity="1.000000"
                                />
                            </svg>
                        </button>
                    </PaginationEllipsis> */}
                </div>
                <div className="dream-of-team__right-block">
                    <h3 className="dream-of-team__title">Для каждой</h3>
                    <p className="dream-of-team__text">
                        Каждая девушка уникальна. Однако, мы схожи в
                        миллионе мелочей. Womazing ищет эти мелочи и создает
                        прекрасные вещи, которые выгодно подчеркивают
                        достоинства каждой девушки.
                    </p>
                    <a href="#" className="dream-of-team__more">
                        Подробнее о бренде
                    </a>
                </div>
            </div>
        </section>
    );
};





// const EmblaCarousel: React.FC<PropType> = (props) => {


//   return (
//     <section className="">
//       <div className="" >
//         <div className="">
          
//         </div>
//       </div>

//     </section>
//   )
// }

// export default EmblaCarousel;