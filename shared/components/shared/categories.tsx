"use client";

import { cn } from "@/shared/lib/utils";
import { Category } from "@prisma/client";
import React, { useState } from "react";

interface Props {
    categories: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ categories, className }) => {
    const [activeCategory, setActiveCategory] = useState(1);
    const handleCategoryClick = (categoryId: number) => {
        setActiveCategory(categoryId);
    };

    return (
        <div
            className={cn(
                "btns-categories",
                className
            )}
        >
            {categories.map(({ name, id }, index) => (
                <a
                    onFocus={() => handleCategoryClick(id)}
                    className={cn(
                        "btns-categories__item",
                        activeCategory === id &&
                        "btns-categories__item_active"
                    )}
                    href={`/shop/category/${id}`}
                    key={index}
                >{name}
                    
                </a>
            ))}
        </div>
    );
};
