'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/components/ui"
import { SheetFooter } from "../ui/sheet";
import { CartSheetItem } from "./cart-sheet-item";
import { getCartItemDetails } from "@/shared/lib/get-cart-item-details";
import { useCartStore } from "@/shared/store";
import { useEffect } from "react";
import { ProductColor, ProductSize } from "@/shared/constants/products";
import { useCart } from "@/shared/hooks";

interface Props {
    className?: string;
}

export const CartSheet: React. FC<React.PropsWithChildren<Props>> = ({children, className}) => {
    const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()
    
    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    };

    return ( 
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col -bottom-12 justify-between pb-0 bg-[#fff]">
                <SheetHeader className="text-[#000]">
                    <SheetTitle>В корзине <span className="font-bold">{items.length}</span> товара</SheetTitle>
                </SheetHeader>

                {/** Items **/}
                <div className="-mx-6 mt-5 overflow-auto flex-1">
                    {items.map((item) => (
                        <div key={item.id} className="mb-2">
                            <CartSheetItem
                                id={item.id} 
                                imageUrl={item.imageUrl} 
                                details={getCartItemDetails(
                                    item.productSize as ProductSize, 
                                    item.productColor as ProductColor
                                )} 
                                name={item.name} 
                                price={item.price} 
                                quantity={item.quantity}  
                                onClickCountButton={((type) => onClickCountButton(item.id, item.quantity, type))}
                                onClickRemove={() => removeCartItem(item.id)}                  
                            />
                        </div>
                    ))}
                </div>

                <SheetFooter className="-mx-6 bg-white p-8">
                    <div className="w-full">
                        <div className="text-lg @text-neutral-580">Итого
                            <span className="font-bold text-lg">{totalAmount}</span>
                        </div>
                    </div>
                    <button className="total-order__create-order">Разместить заказ</button>
                </ SheetFooter>
            </SheetContent>
        </Sheet>
    )
}