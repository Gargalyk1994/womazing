import './contacts.scss';

export default function Contacts() {
    return ( 
        <>
            <section className="contacts center">
                <div className="contacts__block-map">
                    <iframe className="contacts__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577332.5683088286!2d36.726176852026086!3d55.5810333861606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1734763809972!5m2!1sru!2sru" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="contacts__info-block">
                    <div className="contacts__wrap-phone">
                        <p className="contacts__title-phone">Телефон</p>
                        <p className="contacts__phone">+7 (495) 823-54-12</p>
                    </div>
                    <div className="contacts__wrap-email">
                        <p className="contacts__title-email">E-mail</p>
                        <p className="contacts__email">info@sitename.com</p>
                    </div>
                    <div className="contacts__wrap-address">
                        <p className="contacts__title-address">Адрес</p>
                        <p className="contacts__address">г. Москва, 3-я улица Строителей, 25</p>
                    </div>
                </div>
                <div className="contacts__wrapper-form">
                    <div className="wrapper-form__heading">Напишите нам</div>
                    <form action="#" className="wrapper-form__form-send">
                        <input type="text" placeholder="Имя" className="form-send__name" />
                        <input type="email" placeholder="E-mail" className="form-send__email" />
                        <input type="tel" placeholder="Телефон" className="form-send__phone" />
                        <textarea name="message" id="message" placeholder="Сообщение" className="form-send__message"></textarea>
                        <button className="form-send__button">Отправить</button>
                    </form>
                    <div className="wrapper-form__status-send">Сообщение успешно отправлено</div>
                </div>
            </section>
        </>
    );
}
