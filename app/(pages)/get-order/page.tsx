import './create-order.scss';

export default function CreateOrder() {
    return ( 
        <>
            <section className="main-block">
            </section>
            <section className="order center">
                <div className="order__forms-order">
                    <form action="#" className="forms-order__form-client">
                        <p className="form-client__title">Данные покупателя</p>
                        <input type="text" placeholder="Имя" className="form-client__field" />
                        <input type="email" placeholder="E-mail" className="form-client__field" />
                        <input type="text" placeholder="Телефон" className="form-client__field" />
                    </form>
                    <form action="#" className="forms-order__form-address">
                        <p className="form-address__title">Адрес получателя</p>
                        <input type="text" placeholder="Страна" className="form-address__field" />
                        <input type="text" placeholder="Город" className="form-address__field" />
                        <input type="text" placeholder="Улица" className="form-address__field" />
                        <input type="text" placeholder="Дом" className="form-address__field" />
                        <input type="text" placeholder="Квартира" className="form-address__field" />
                    </form>
                    <form action="#" className="forms-order__form-comments">
                        <p className="form-comments__title">Комментарии</p>
                        <textarea placeholder="Введите комментарий" className="form-comments__field"></textarea>
                    </form>
                </div>
                <div className="order__total-order">
                    <div className="total-order__total">
                        <p className="total__heading">Ваш заказ</p>
                        <div className="total__table-amount">
                            <div className="table-amount__head">
                                <p className="table-amount__col-product">Товар</p>
                                <p className="table-amount__col-price">Всего</p>
                            </div>
                            <div className="table-amount__product">
                                <p className="table-amount__product-name">Футболка USA</p>
                                <p className="table-amount__product-price">129</p>
                            </div>
                            <div className="table-amount__sub-total">
                                <p className="sub-total__title">Подытог</p>
                                <p className="sub-total__price">129</p>
                            </div>
                            <div className="table-amount__total-price">
                                <p className="total-price__title">Итого</p>
                                <p className="total-price__price">129</p>
                            </div>
                        </div>
                    </div>
                    <div className="total-order__payment-method">
                        <p className="payment-method__heading">Способы оплаты</p>
                        <ul className="payment-method__items">
                            <li className="payment-method__item">
                                <input id="cash" type="checkbox" className="payment-method__mark" />
                                <label htmlFor="cash" className="payment-method__cash">Оплата наличными</label>
                            </li>
                        </ul>
                        <button className="total-order__create-order">Разместить заказ</button>
                    </div>
                </div>
            </section>
        </>
    );
}