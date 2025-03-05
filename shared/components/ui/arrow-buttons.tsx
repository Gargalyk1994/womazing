'use client'

import React, {
} from "react";


interface Props {
    className?: string;
    moveSlide: () => void ;
}

export const PrevButton: React. FC<Props> = ({ className, moveSlide }) => {
    return (
        <button
            onClick={moveSlide}
            className="dream-of-team__prev"
            type="button"
        >
            <svg
                width="29"
                height="16"
                viewBox="0 0 29 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15"
                    stroke="black"
                />
            </svg>
        </button>
    );
};

export const NextButton: React.FC<Props> = ({ className, moveSlide}) => {

    return (
        <button
            onClick={moveSlide}
            className="dream-of-team__next"
            type="button"
        >
            <svg
                width="29"
                height="16"
                viewBox="0 0 29 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1"
                    stroke="black"
                />
            </svg>
        </button>
    );
};
