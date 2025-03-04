
import React from 'react'; 
import { ProductCard } from './product-card';
import { Product } from '@prisma/client';
import { cn } from '@/shared/lib/utils';
import Link from 'next/link';

interface Props {
    products: Product[];
    productsPrice: number[];
    productsOldPrice?: (number | null)[];
    className?: string;
}

export const NewCollection: React. FC<Props> = ({ className, products, productsPrice, productsOldPrice }) => {
    
    return (
        <section className={cn(className,"new-collection center")}>
            <h2 className="new-collection__heading">Новая коллекция</h2>
            <div className="products">
                {products.slice(0, 3).map((product, i) => ( 
                        (
                            <ProductCard
                                key={product.id}
                                id={product.id} 
                                title={product.name}
                                price={productsPrice[i]}
                                oldPrice={productsOldPrice[i]}
                                image={product.image}
                                alt={product.alt}
                                categoryId={product.categoryId}
                            />
                        )
                    )
                )}
            </div>
            <div className="new-collection__btn-box">
                <Link href={"./shop"} className="new-collection__btn">
                    Открыть магазин
                </Link>
            </div>
        </section>
    );
};


