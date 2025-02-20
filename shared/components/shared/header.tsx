import { cn } from '@/shared/lib/utils';
import Link from 'next/link';
import React from 'react'; 
import { PhoneNumber } from './phone-number';
import { CartButton } from './cart-button';

interface Props {
    className?: string;
}

export const Header: React. FC<Props> = ({ className }) => {
    return (
    <header className="header center">
        <Link href="/" className="header__logo">
            <svg width="18.066589" height="25.000000" viewBox="0 0 18.0666 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector1" d="M18.05 22.64L17.69 20.97C16.95 17.53 15.6 14.29 13.67 11.35L13.67 8.64C14.56 7.97 15.13 6.9 15.13 5.71L15.13 4.24C15.13 3.84 14.8 3.51 14.4 3.51L13.67 3.51L13.67 0.73C13.67 0.32 13.34 0 12.93 0C12.53 0 12.2 0.32 12.2 0.73L12.2 3.52C10.89 3.6 9.73 4.29 9.03 5.31C8.32 4.29 7.17 3.6 5.85 3.52L5.85 0.73C5.85 0.32 5.53 0 5.12 0C4.72 0 4.39 0.32 4.39 0.73L4.39 3.51L3.66 3.51C3.25 3.51 2.92 3.84 2.92 4.24L2.92 5.71C2.92 6.9 3.5 7.97 4.39 8.64L4.39 11.35C2.46 14.29 1.11 17.53 0.37 20.97L0.01 22.64C-0.07 23 0.13 23.36 0.48 23.49C3.23 24.49 6.1 25 9.03 25C11.95 25 14.83 24.49 17.58 23.49C17.92 23.36 18.12 23 18.05 22.64ZM12.45 4.98L13.67 4.98L13.67 5.71C13.67 6.92 12.68 7.91 11.47 7.91L9.76 7.91L9.76 7.66C9.76 6.18 10.97 4.98 12.45 4.98ZM4.39 4.98L5.61 4.98C7.09 4.98 8.3 6.18 8.3 7.66L8.3 7.91L6.59 7.91C5.38 7.91 4.39 6.92 4.39 5.71L4.39 4.98ZM6.59 9.37L11.47 9.37C11.72 9.37 11.97 9.34 12.2 9.3L12.2 10.83L5.85 10.83L5.85 9.3C6.09 9.34 6.34 9.37 6.59 9.37ZM9.03 23.53C6.49 23.53 3.98 23.12 1.58 22.32L1.8 21.28C2.49 18.07 3.74 15.05 5.52 12.3L12.54 12.3C14.32 15.05 15.57 18.07 16.25 21.28L16.48 22.32C14.07 23.12 11.57 23.53 9.03 23.53Z" fill="#000000" fillOpacity="1.000000" fillRule="nonzero"/>
            </svg>
            <h4 className="header__logo_title">Womazing</h4>
        </Link>
        <nav className="navigation__menu">
            <ul className="navigation__links">
                <li><Link href="/" className="navigation__link">Главная</Link></li>
                <li><Link href="/shop" className="navigation__link">Магазин</Link></li>
                <li><Link href="/brand" className="navigation__link">О бренде</Link></li>
                <li><Link href="/contacts" className="navigation__link">Контакты</Link></li>
            </ul>
        </nav>
        <div className="header__contacts">
            <PhoneNumber />
            <CartButton />
        </div>
    </header>
    );
};