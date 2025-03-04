import { CarouselMain, ImportantForUs, NewCollection } from "@/shared/components/shared";
import { products, productsItemsOldPrice, productsItemsPrice } from "@/shared/constants/prices";
import { EmblaOptionsType } from 'embla-carousel';
import "./main.scss";

export default async function Main() {
    const OPTIONS: EmblaOptionsType = {}
    return (
        <>
            <NewCollection 
                products={products} 
                productsPrice={productsItemsPrice}
                productsOldPrice={productsItemsOldPrice}
            />
            <ImportantForUs />
            <CarouselMain options={OPTIONS}/>        
        </>
    );
}
