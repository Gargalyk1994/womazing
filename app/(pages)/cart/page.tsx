import './cart.scss';

export default function Cart() {
    return ( 
        <>
            <section className="cart-content center">
                <div className="cart-content__products">
                    <div className="cart-content__header-products">
                        <p className="header-products__product-name">Товар</p>
                        <p className="header-products__price">Цена</p>
                        <p className="header-products__quantity">Количество</p>
                        <p className="header-products__total-price">Всего</p>
                    </div>
                    <div className="cart-content__product-cart">
                        <div className="product-cart__item">
                            <div className="product-cart__close">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 1L13 13M13 1L1 13" stroke="black"/>
                                </svg>
                            </div>
                            <img src="./images/product-photo1.png" alt="Woman1" className="product-cart__image" />
                            <p className="product-cart__name">Футболка USA</p>
                        </div>
                        <p className="product-cart__price">129</p>
                        <input type="number" placeholder="0" step="1" min="1" max="100" className="product-cart__quantity"/>
                        <p className="product-cart__total-price">129</p>
                    </div>
                    <div className="cart-content__additionally">
                        <form action="#" className="additionaly__wrap-coupon">
                            <input type="text" placeholder="Введите купон" className="additionally__coupon" />
                            <button className="additionally__add-coupon">Применить купон</button>
                        </form>
                        <button className="additionally__update-cart">Обновить корзину</button>
                    </div>
                    <div className="cart-content__total-amount">
                        <p className="total-amount__sub-total">Подытог: <span className="total-amount__sub-price">129</span></p>
                        <div className="total-amount__wrap">
                            <div className="total-amount__summary">Итого: <span className="total-amount__summary-price">129</span></div>
                            <button className="total-amount__get-order">Оформить заказ</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
