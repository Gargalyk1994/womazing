import { CartDTO } from "../services/cart-dto";
import { calcCartItemTotalPrice } from "./calc-cart-item-total-price";

export type CartStateItem = {
    id: number;
    quantity: number;
    name: string;
    imageUrl: string;
    price: number;
    productSize?: number | null;
    productColor?: number | null;
    disabled?: boolean;
};

interface ReturnProps {
    items: CartStateItem[];
    totalAmount: number;
}

/**
 * Функция для обработки объекта из ответа от сервера и преобразования в новый объект с необходимыми данными 
 * @param data 
 * @returns 
 */
export const getCartDetails = (data: CartDTO): ReturnProps => {
    const items = data.items.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        name: item.productItem.product.name,
        imageUrl: item.productItem.product.image,
        price: calcCartItemTotalPrice(item),
        productSize: item.productItem.size,
        productColor: item.productItem.color,
        disabled: false
    })) as CartStateItem[];

    return {
        items,
        totalAmount: data.totalAmount,
    };
};
