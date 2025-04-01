"use client";

import { cn } from "@/shared/lib/utils";
import { VariantsSizes } from "./variants-sizes";
import {
    ProductColor,
    ProductSize,
    sizesProducts,
} from "@/shared/constants/products";
import { VariantsColors } from "./variants-colors";
import { ProductItem } from "@prisma/client";
import { useProductOptions, useSheetOpen } from "@/shared/hooks";
import { BtnAddToCart } from "./btn-add-to-cart";
import { useCartStore } from "@/shared/store";
import { ProductWithRelations } from "@/@types/prisma";

interface Props {
    product: ProductWithRelations;
}

export const ChooseProduct: React.FC<Props> = ({
    product,
}) => {
    const { setIsSheetOpen } = useSheetOpen();
    const { size, color, currentItemId, setSize, setColor, availableProducts } =
        useProductOptions(product.items);

    const addCartItem = useCartStore((state) => state.addCartItem );

    const productPrice = product.items.find(
        (item) => item.size === size && item.color === color
    )?.price;
    const productOldPrice = product.items.find(
        (item) => item.size === size && item.color === color
    )?.oldPrice;
    const firstItem = product.items[0];

    const onSubmit = async (productItemId: number) => {
        try {
            const itemId = productItemId ?? firstItem.id;
            await addCartItem({
                productItemId: itemId
            });
        } catch(err) {
            console.error(err);
        }
    };

    const handleClickAdd = () => {
        if (currentItemId) {
            onSubmit(currentItemId);
            setIsSheetOpen(true);
        }
    };

    return (
        <section className="product-item center">
            <div className="product-item__block-image">
                <img
                    src={product.image}
                    alt={product.alt}
                    className="block-image__image"
                />
            </div>
            <div className="product-item__block-options">
                <div className="block-options__box-price">
                    {productPrice ? (
                        <p className="block-options__price">{productPrice}</p>
                    ) : null}
                    {productOldPrice ? (
                        <p className="block-options__price_old">
                            {productOldPrice}
                        </p>
                    ) : null}
                </div>
                <VariantsSizes
                    items={product.items}
                    sizes={sizesProducts}
                    onClick={(value) => setSize(Number(value) as ProductSize)}
                    selectedValue={String(size)}
                    size={size}
                />
                <VariantsColors
                    items={availableProducts}
                    onClick={(value) => setColor(Number(value) as ProductColor)}
                    selectedValue={String(color)}
                />
                <BtnAddToCart onClickAddCart={handleClickAdd} />
            </div>
        </section>
    );
};
