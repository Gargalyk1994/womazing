import { prisma } from "@/prisma/prisma";
import { notFound } from "next/navigation";
import { ChooseProduct, ProductCard } from "@/shared/components/shared";
import "./product.scss";

export default async function ProductPage({params: { id },} : { params: { id: string }; }) {
    
    const product = await prisma.product.findFirst({
        where: { id: Number(id) },
        include: {
            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        },
                    },
                },
            },
            items: true,
        },
    });

    const products = await prisma.product.findMany({
        include: {
            items: true
        }
    })

    const productItems = await prisma.productItem.findMany({
        where: {
            productId: Number(id),
        },
    });

    if (!product) {
        return notFound();
    }

    const productsItemsPrice = products
        .map((product) => product.items
        .map((item) => item.price))
        .map((product) => Math.min(...product));
    const productsItemsOldPrice = products
        .map((product) => product.items
        .map((item) => item.oldPrice))
        .map((product) => Math.min(...product));

    return (
        <>
            <ChooseProduct product={product} items={productItems} />
            <section className="similar-products center">
                <h3 className="similar-products__title">Связанные товары</h3>
                <div className="similar-products__wrap products">
                    {products.map((product, i) => ( 
                        (
                            <ProductCard
                                key={product.id}
                                id={product.id} 
                                title={product.name}
                                price={productsItemsPrice[i]}
                                oldPrice={productsItemsOldPrice[i]}
                                image={product.image}
                                alt={product.alt}
                                categoryId={product.categoryId}
                            />
                            )
                        )
                    )}
                </div>
            </section>
        </>
    );
}
