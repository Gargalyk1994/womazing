import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import React from 'react'; 
import { CartSheet } from './cart-sheet';
import { Button } from '../ui';

interface Props {
    className?: string;
}

export const CartButton: React. FC<Props> = ({ className }) => {
    
    return (
        <CartSheet>
            <div className="header__cart">
                <svg width="24.000000" height="24.000000" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <clipPath id="clip4_808">
                            <rect id="shopping-bags1" width="24.000000" height="24.000000" fill="white" fillOpacity="0"/>
                        </clipPath>
                    </defs>
                    <rect id="shopping-bags2" width="24.000000" height="24.000000" fill="#FFFFFF" fillOpacity="0"/>
                    <g clipPath="url(#clip4_808)">
                        <path id="Vector5" d="M23.84 8.22C23.72 8.1 23.56 8.05 23.4 8.07L17.03 8.07L17.03 5.26C17.03 2.48 14.78 0.22 12 0.22C9.21 0.22 6.96 2.48 6.96 5.26L6.96 8.07L0.59 8.07C0.42 8.07 0.24 8.07 0.15 8.22C0.03 8.33 -0.03 8.5 0 8.66L2.22 20.81C2.53 22.5 4 23.74 5.72 23.77L18.27 23.77C20 23.72 21.46 22.47 21.77 20.78L23.99 8.66C24.02 8.5 23.96 8.33 23.84 8.22ZM8.15 5.26C8.15 3.13 9.87 1.41 12 1.41C14.12 1.41 15.84 3.13 15.84 5.26L15.84 8.07L8.15 8.07L8.15 5.26ZM20.58 20.63C20.38 21.75 19.41 22.57 18.27 22.58L5.72 22.58C4.58 22.57 3.61 21.75 3.41 20.63L1.3 9.26L22.69 9.26L20.58 20.63Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
                        <path id="Vector4" d="M16.44 15.03C16.76 15.03 17.03 14.77 17.03 14.44L17.03 12.66C17.03 12.33 16.76 12.07 16.44 12.07C16.11 12.07 15.84 12.33 15.84 12.66L15.84 14.44C15.84 14.77 16.11 15.03 16.44 15.03Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
                        <path id="Vector6" d="M7.55 15.03C7.88 15.03 8.15 14.77 8.15 14.44L8.15 12.66C8.15 12.33 7.88 12.07 7.55 12.07C7.23 12.07 6.96 12.33 6.96 12.66L6.96 14.44C6.96 14.77 7.23 15.03 7.55 15.03Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
                    </g>
                </svg>
                <span className="header__cart-counter">4</span>
            </div>
        </CartSheet>
    );
};