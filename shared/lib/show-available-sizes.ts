import { ProductSize, sizesProducts } from "../constants/products"

/**
 * Функция показывает доступных размеры данного продукта
 * @param items - массив вариантов продуктов
 * @param size - размер продукта
 * @returns 
 */
export const showAvailableSizes = ( size: ProductSize) => {
    const filteredSizes = sizesProducts.filter(item => Number(item.value) === size)

    return sizesProducts.map((item) => ({
        size: item.size,
        value: item.value,
        disabled: filteredSizes.filter((product) => Number(product.value) === size)
    }))
}