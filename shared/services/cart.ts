import { axiosInstance } from "./instance";
import { CartDTO, CreateCartItemValues } from "./cart-dto";

/*Запрос из браузера на получение данных корзины*/
export const getCart = async (): Promise<CartDTO> => {
    return (await axiosInstance.get<CartDTO>("/cart")).data;
};

/* Запрос из браузера на обновление количества товара в корзине  */
export const updateItemQuantity = async (
    itemId: number,
    quantity: number
): Promise<CartDTO> => {
    return (await axiosInstance.patch<CartDTO>("/cart/" + itemId, { quantity }))
        .data;
};


/* Запрос из браузера на удаление товара из корзины */
export const removeCartItem = async (id: number): Promise<CartDTO> => {
    return (await axiosInstance.delete<CartDTO>("/cart/" + id)).data;
};

/* Запрос из браузера на добавление товара в корзину */
export const addCartItem = async (
    values: CreateCartItemValues
): Promise<CartDTO> => {
    return (await axiosInstance.post<CartDTO>("/cart", values)).data;
};
