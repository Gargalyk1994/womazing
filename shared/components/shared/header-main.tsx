
import React from 'react'; 
import { Header } from './header';

interface Props {
className?: string;
}

export const HeaderMain: React. FC<Props> = ({ className }) => {
    return (
        <main className="main-block">
            <div className="main-block__content">
                <Header />
                <div className="main-block__sliders center">
                    <div className="text-slider">
                        <h1 className="text-slider__heading">
                            Новые поступления в этом сезоне
                        </h1>
                        <h3 className="text-slider__text">
                            Утонченные сочетания и бархатные оттенки - вот
                            то, что вы искали в этом сезоне. Время
                            исследовать.
                        </h3>
                        <div className="text-slider__btns-box">
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
                        </div>
                        <div className="text-slider__nav">
                            <button className="text-slider__bullitt">
                                <svg
                                    width="30.000000"
                                    height="4.000000"
                                    viewBox="0 0 30 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        id="Rectangle2"
                                        width="30.000000"
                                        height="4.000000"
                                        fill="#D1D1D1"
                                        fillOpacity="1.000000"
                                    />
                                </svg>
                            </button>
                            <button className="text-slider__bullitt">
                                <svg
                                    width="30.000000"
                                    height="4.000000"
                                    viewBox="0 0 30 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        id="Rectangle3"
                                        width="30.000000"
                                        height="4.000000"
                                        fill="#D1D1D1"
                                        fillOpacity="1.000000"
                                    />
                                </svg>
                            </button>
                            <button className="text-slider__bullitt">
                                <svg
                                    width="30.000000"
                                    height="4.000000"
                                    viewBox="0 0 30 4"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <rect
                                        id="Rectangle4"
                                        width="30.000000"
                                        height="4.000000"
                                        fill="#D1D1D1"
                                        fillOpacity="1.000000"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
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