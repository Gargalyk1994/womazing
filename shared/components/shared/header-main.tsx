
import React from 'react'; 
import { Header } from './header';
import { TextCarouselHome } from './text-carousel-home';

interface Props {
className?: string;
}

export const HeaderMain: React. FC<Props> = ({ className }) => {
    return (
        <main className="main-block">
            <div className="main-block__content">
                <Header />
                <div className="main-block__sliders center">
                    <TextCarouselHome />
                    <div className="slider-image">
                        <div className="slider-image__img-box">
                            <img
                                src="./images/main-slider-img1.png"
                                alt="Woman1"
                                className="slider-image__img"
                            />
                        </div>
                        <div className="slider-image__img-box">
                            <img
                                src="#"
                                alt="Unknow"
                                className="slider-image__img"
                            />
                        </div>
                        <div className="slider-image__img-box">
                            <img
                                src="#"
                                alt="Unknow"
                                className="slider-image__img"
                            />
                        </div>
                        <div className="slider-image__static-photo1">
                            <img
                                src="./images/second-photo.png"
                                alt="Woman2"
                                className="slider-image__static-photo"
                            />
                        </div>
                        <div className="slider-image__static-photo2">
                            <img
                                src="./images/third-photo.png"
                                alt="Woman3"
                                className="slider-image__static-photo"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};