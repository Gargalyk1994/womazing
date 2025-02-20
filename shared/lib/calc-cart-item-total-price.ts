import { CartItemDTO } from "../services/cart-dto";


/**
 * Функция подсчета общей стоимости вариации одного продукта учитывая его количество в корзине
 * @param item -полученный от сервера и преобразованный обьект корзины
 * @returns 
 */
export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
    return  item.productItem.price * item.quantity;
};
