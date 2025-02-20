import { ProductSize, sizesProducts } from "../constants/products"
import { VariantsSize } from "../components/shared/variants-sizes";
import { ProductItem } from "@prisma/client";

/**
 * Функция показывает доступных размеры данного продукта
 * @param items - массив вариантов продуктов
 * @param size - размер продукта
 * @returns 
 */
export const showAvailableSizes = (products: ProductItem[], size: ProductSize) => {
    const filteredSizes = sizesProducts.filter(item => Number(item.value) === size)

    return sizesProducts.map((item) => ({
        size: item.size,
        value: item.value,
        disabled: filteredSizes.filter((product) => Number(product.value) === size)
    }))
}