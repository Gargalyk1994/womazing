'use client'

import Link from "next/link";
import { useRef, useState } from "react";
import {useClickAway} from 'react-use';
import { Button, Form, Input } from "../ui";


interface Props {
    className?: string;
}

export const PhoneNumber: React. FC<Props> = () => {
    const [focused, setFocused] = useState(false);
    const ref = useRef(null);

    useClickAway(ref, () =>{
        setFocused(false);
    });

    return (
        <>
            {focused && <div className="header__back-phone"></div>}
            <Link href="#" className="header__image-phone" onFocus={() => setFocused(true)}>
                <svg width="17.000000" height="17.000000" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <clipPath id="clip4_789">
                            <rect id="telephone2" width="17.000000" height="17.000000" fill="white" fillOpacity="0"/>
                        </clipPath>
                    </defs>
                    <rect id="telephone3" width="17.000000" height="17.000000" fill="#FFFFFF" fillOpacity="0"/>
                    <g clipPath="url(#clip4_789)">
                        <path id="Vector2" d="M2.25 4.81C0.75 6.31 0.75 8.76 2.25 10.26L3.04 9.46C1.98 8.4 1.98 6.67 3.05 5.61C4.11 4.55 5.83 4.55 6.9 5.61L7.69 4.81C6.19 3.31 3.75 3.31 2.25 4.81Z" fill="#6E9C9F" fillOpacity="1.000000" fillRule="nonzero"/>
                        <path id="Vector3" d="M3.84 6.39C3.2 7.02 3.2 8.05 3.84 8.68L4.63 7.88C4.54 7.79 4.49 7.66 4.49 7.53C4.49 7.4 4.54 7.28 4.63 7.18C4.73 7.09 4.85 7.04 4.98 7.04C5.11 7.04 5.24 7.09 5.33 7.18L6.13 6.39C5.5 5.75 4.47 5.75 3.84 6.39Z" fill="#6E9C9F" fillOpacity="1.000000" fillRule="nonzero"/>
                        <path id="Vector7" d="M13.74 4.43L11.85 2.54L7.92 6.47L9.44 8.04C9.19 8.5 8.63 9.36 7.69 10.31C6.74 11.25 5.87 11.81 5.41 12.07L3.87 10.55L0 14.4L1.88 16.29C2.6 17.01 3.69 17.2 4.61 16.76C5.99 16.08 8.09 14.84 10.19 12.74C12.29 10.64 13.53 8.54 14.21 7.16C14.37 6.83 14.44 6.47 14.44 6.12C14.45 5.5 14.2 4.89 13.74 4.43ZM13.19 6.66C12.56 7.97 11.38 9.95 9.39 11.94C7.4 13.93 5.42 15.11 4.11 15.74C3.63 15.97 3.06 15.88 2.68 15.5L1.59 14.4L3.87 12.14L5.19 13.44L5.54 13.28C5.59 13.25 6.95 12.64 8.49 11.11C10.02 9.57 10.62 8.23 10.65 8.17L10.8 7.82L9.5 6.48L11.85 4.14L12.95 5.23C13.33 5.61 13.42 6.18 13.19 6.66Z" fill="#6E9C9F" fillOpacity="1.000000" fillRule="nonzero"/>
                    </g>
                </svg>
                <p className="header__number-phone">+7 (495) 823-54-12</p>
            </Link>
            {focused && <div ref={ref} className="header__order-callback">
                <Button className="order-callback__close" onFocus={() => setFocused(false)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L15.5 15.5M15.5 1L1 15.5" stroke="black" />
                    </svg>
                </Button>
                <form action="#" className="order-callback">
                    <h3 className="order-callback__title">Заказать обратный звонок</h3>
                    <Input type="text" className="order-callback__input" placeholder="Имя"/>
                    <Input type="email" className="order-callback__input" placeholder="E-mail"/>
                    <Input type="text" className="order-callback__input" placeholder="Телефон"/>
                    <Button type="submit" className="order-callback__submit">Заказать звонок</Button>
                </form>
            </div>}
        </>
    )
}