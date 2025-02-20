import { ProductSize, ProductColor, mapSizesProducts, mapColorsProducts } from "../constants/products";


/**
 * Функция для получения размера и цвета продукта и отображении в Cart и Sheet
 * @param productSize значение размера
 * @param productColor значение цвета
 * @returns элемент массива ввиде строки
 */
export const getCartItemDetails = (
    productSize?: ProductSize,
    productColor?: ProductColor
): string => {
    const details = [];

    if (productSize && productColor) {
        const sizeName = mapSizesProducts[productSize];
        const colorName = mapColorsProducts[productColor];
        details.push(`Размер ${sizeName} цвет ${colorName}`);
    }

    return details.join(", ");
};
