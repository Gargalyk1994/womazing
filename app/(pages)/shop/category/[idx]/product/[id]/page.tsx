

import { prisma } from '@/prisma/prisma';
import { notFound } from 'next/navigation';
import { ChoiceProduct } from '@/shared/components/shared';
import './product.scss';


export default async function ProductPage({ params: { id } } : { params: { id: string }}){

    const product = await prisma.product.findFirst({
        where: { 
            id: Number(id)
        },
    });
    
    const productItems = await prisma.productItem.findMany({
        where: {
            productId: Number(id),
        },
    })

    console.log(productItems);

    if (!product) {
        return notFound();
    }

    return ( 
        <>
            <ChoiceProduct 
                product={product}
                items={productItems}
            />
            <section className="similar-products center">
                <h3 className="similar-products__title">Связанные товары</h3>
                <div className="similar-products__wrap products">
                    {/* {products.slice(0, 2).map((item) => <Product key={products.id} item={item}/>)} */}
                </div>
            </section>
        </>
    );
}


    