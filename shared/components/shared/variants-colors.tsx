'use client'

import { cn } from "@/shared/lib/utils";

export type VariantsColor = {
    color: string;
    value: string;
    disabled?: boolean;
}
interface Props {
    items: readonly VariantsColor[];
    onClick?: (value: VariantsColor['value']) => void;
    selectedValue?: VariantsColor['value'];
    className?: string;
}

export const VariantsColors: React.FC<Props> = ({ items, onClick, className, selectedValue }) => {
    return(
        <div className= {cn( className,"block-options__color")}>
            <p className="color__title">Выберите цвет</p>
            <div className="color__items">
                {items.map((item) => (
                    <button 
                        key={item.value} 
                        onClick={() => onClick?.(item.value)}
                        className={cn(
                            "color__item",
                            `color__item_${item.value}`,
                            {
                                "color__item_active": item.value === selectedValue,
                                "disabled-btn": item.disabled,
                            }
                        )}>
                    </button>
                ))}
            </div>
        </div>
    )
}
    