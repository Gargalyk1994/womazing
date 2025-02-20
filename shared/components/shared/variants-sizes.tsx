'use client'

import { cn } from "@/shared/lib/utils";
import { ProductItem } from "@prisma/client";

export type VariantsSize = {
    value: string;
    size: string;
    disabled?: boolean;
}
interface Props {
    sizes: readonly VariantsSize[];
    items: ProductItem[];
    onClick?: (value: VariantsSize['value']) => void;
    selectedValue?: VariantsSize['value'];
    className?: string;
    size: number;
}

export const VariantsSizes: React.FC<Props> = ({ sizes, items, onClick, className, selectedValue }) => {

    const sizesProductItems = items.map((item) => item.size)

    return(
        <div className= {cn( className,"block-options__size")}>
            <p className="size__title">Выберите размер</p>
            <div className= {cn( className,'size__items')}>
                {sizes.map((size) => sizesProductItems.includes(Number(size.value)) && (
                    <button 
                        key={size.size} 
                        onClick={() => onClick?.(size.value)}                                  
                        className={cn(
                            {
                                "size__item": size.value,
                                // "display-none": Number(item.value) !== size
                            },
                            {
                                "size__item_active": size.value === selectedValue,
                                "disabled-btn": size.disabled,
                            },
                            
                        )}>
                        {size.size}
                    </button>
                ))}
            </div>
        </div>
        
    )
}
    