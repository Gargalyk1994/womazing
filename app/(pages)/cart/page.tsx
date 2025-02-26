import { CartItems } from '@/shared/components/shared';
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
                    <CartItems />
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
