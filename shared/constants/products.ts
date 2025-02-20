export const mapSizesProducts = 
    {
        1: "S",
        2: "M",
        3: "L",
        4: "XL",
        5: "XXL"
    } as const;

export const mapColorsProducts = {
    1: "фиолетовый",
    2: "серый",
    3: "розовый",
    4: "оранжевый"
} as const;

export const sizesProducts = Object.entries(mapSizesProducts).map(([value, size]) => ({
    size,
    value,
}));

export const colorsProducts = Object.entries(mapColorsProducts).map(([value, color]) => ({
    color,
    value,
}));

export type ProductSize = keyof typeof mapSizesProducts;//приравнивание к типу 1 | 2 | 3 | 4 | 5
export type ProductColor = keyof typeof mapColorsProducts;
