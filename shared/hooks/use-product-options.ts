'use client'

import { useEffect, useState } from "react";
import { getAvailableProducts } from "../lib";
import { ProductColor, ProductSize  } from "../constants/products";
import { ProductItem } from "@prisma/client";
import { VariantsColor } from "../components/shared/variants-colors";

interface ReturnProps {
    size: ProductSize,
    color: ProductColor,
    currentItemId?: number,
    setSize: (size: ProductSize) => void,
    setColor: (color: ProductColor) => void,
    availableProducts : VariantsColor[],
}

export const useProductOptions = (
    items: ProductItem[]
) : ReturnProps => {
    const [size, setSize] = useState<ProductSize>(1);
    const [color, setColor] = useState<ProductColor>(1);

    const currentItemId = items.find((item) => item.size === size && item.color === color)?.id;

    const availableProducts = getAvailableProducts(items, size);

    useEffect(() => {
        const isAvailableColors = availableProducts?.find((item) => Number(item.value) === color && !item.disabled);
        const availableColors = availableProducts?.find((item) => !item.disabled);
        if(!isAvailableColors && availableColors){
            setColor(Number(availableColors.value) as ProductColor);
        }
    },[size])

    return {
        size,
        color,
        currentItemId,
        setSize,
        setColor,
        availableProducts,
    }
}