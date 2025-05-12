"use client";

import React, { useState } from "react";

import { cn } from "@/shared/lib/utils";
import { ProductCard } from "./product-card";



interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    items,
    categoryId,
    listClassName,
    className,
}) => {
    const [activeCategoryId, setActiveCategoryId] = useState(0) ;

    React.useEffect(() => {
        setActiveCategoryId(categoryId);
    }, [activeCategoryId]);

    return (
            <div className={cn("products", listClassName)}>
                {items.map((product, i) => (
                    <ProductCard
                        key={product.id+1}
                        id={product.id} 
                        title={product.name}
                        price={product.items.price}
                        oldPrice={product.items.oldPrice}
                        image={product.image}
                        alt={product.alt}
                        categoryId={categoryId}
                    />
                ))}
            </div>
    );
};
