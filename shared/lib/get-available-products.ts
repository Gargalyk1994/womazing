import { ProductItem } from "@prisma/client"
import { colorsProducts, ProductSize } from "../constants/products"

/**
 * Функция получения доступных продуктов по размеру и цвету
 * @param items - массив вариантов продуктов
 * @param size - размер продукта
 * @param color - цвет продукта
 * @returns 
 */
export const getAvailableProducts = (items: ProductItem[], size: ProductSize) => {
    const filteredProductsBySizes = items.filter(item => item.size === size)
    
    return colorsProducts.map((item) => ({
        color: item.color,
        value: item.value,
        disabled: !filteredProductsBySizes.some((product) => product.color === Number(item.value))
    }))
}