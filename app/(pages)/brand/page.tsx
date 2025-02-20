import './about-brand.scss';

export default function Brand() {
    return (
        <>
            <section className="brand-content center">
                <div className="brand-content__wrapper">
                    <div className="brand-content__block">
                        <img src="/images/image-for-about-brand2.png" alt="Woman with Brand1" className="brand-content__image" />
                        <div className="brand-content__description">
                            <h3 className="brand-content__heading">Идея и женщина</h3>
                            <p className="brand-content__text">Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.
                            Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.</p>
                        </div>
                    </div>
                    <div className="brand-content__block">
                        <div className="brand-content__description">
                            <h3 className="brand-content__heading">Магия в деталях</h3>
                            <p className="brand-content__text">Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.
                            Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. </p>
                        </div>
                        <img src="/images/image-for-about-brand1.png" alt="Woman with Brand1" className="brand-content__image" />
                    </div>
                    <button className="brand-content__to-store">Перейти в магазин</button>
                </div>
            </section>
        </>
    );
}