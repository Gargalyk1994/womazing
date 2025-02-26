'use client'

import { useCart } from "@/shared/hooks";

interface Props {
    className?: string;
}

export const CartItems: React. FC<React.PropsWithChildren<Props>> = ({children, className}) => {
    const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart();
    
    console.log(items);

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    return ( 
        <div className="cart-items">
            {items.map((item) => (
                <div key={item.id} className="cart-content__product-cart">
                    <div className="product-cart__item">
                        <div className="product-cart__close">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M13 1L1 13" stroke="black"/>
                            </svg>
                        </div>
                        <img src="./images/product-photo1.png" alt="Woman1" className="product-cart__image" />
                        <p className="product-cart__name">{item.name}</p>
                    </div>
                    <p className="product-cart__price">{item.price}</p>
                    <input type="number" placeholder="0" step="1" min="1" max="100" className="product-cart__quantity"/>
                    <p className="product-cart__total-price">{item.quantity}</p>
                </div>
                )
            )}
        </div>
    )
}