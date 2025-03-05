import { CarouselMain, ImportantForUs, NewCollection } from "@/shared/components/shared";
import { products, productsItemsOldPrice, productsItemsPrice } from "@/shared/constants/prices";
import "./main.scss";

export default async function Main() {
    return (
        <>
            <NewCollection 
                products={products} 
                productsPrice={productsItemsPrice}
                productsOldPrice={productsItemsOldPrice}
            />
            <ImportantForUs />
            <CarouselMain/>        
        </>
    );
}
