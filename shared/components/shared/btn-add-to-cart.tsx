
interface Props{
    onClickAddCart?: VoidFunction;
}


export const BtnAddToCart: React. FC<Props> = ({onClickAddCart}) => {
    return(
        <div className="block-options__btns">
            <button className="block-options__quantity">1</button>
            <button className="block-options__to-cart" onClick={onClickAddCart}>Добавить в корзину</button>
        </div>
    )
}

