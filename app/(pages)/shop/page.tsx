

import { prisma } from '@/prisma/prisma';
import { Categories, PaginationShop, ProductCard } from '@/shared/components/shared';
import './shop.scss';


export default async function Shop() {

    const categories = await prisma.category.findMany({
        include: {
            products: {
                take: 9,
                orderBy: {
                    createdAt: 'desc',
                },
                include: {
                    items: true
                }
            },
        }
    })

    const products = await prisma.product.findMany({
        include: {
            items: true
        }
    })

    const productsItemsPrice = products
        .map((product) => product.items
        .map((item) => item.price))
        .map((product) => Math.min(...product));
    const productsItemsOldPrice = products
        .map((product) => product.items
        .map((item) => item.oldPrice))
        .map((product) => product !== null && Math.min(...product));
    
    return ( 
        <>
            <section className="catalog center">
                <Categories 
                    categories={categories.filter((category) => category.products.length > 0)}
                />
                <p className="counter-products">Показано: 9 из {products.length} товаров</p>
                    <div className="products">
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
                <p className="counter-products">Показано: 9 из {products.length} товаров</p>
                <PaginationShop />
            </section>
        </>
    );
}
