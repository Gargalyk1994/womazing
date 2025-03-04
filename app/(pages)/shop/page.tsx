

import { prisma } from '@/prisma/prisma';
import { Categories, ProductCard } from '@/shared/components/shared';
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
                <Categories categories={categories.filter((category) => category.products.length > 0)} />
                <p className="counter-products">Показано: 9 из 12 товаров</p>
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
                <p className="counter-products">Показано: 9 из 12 товаров</p>
                <div className="catalog__nav-pages">
                    <button className="catalog__page">1</button>
                    <button className="catalog__page">2</button>
                    <button className="catalog__page_next">
                        <svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-2.18557e-07 5.5L20 5.5M20 5.5L14.8649 10.5M20 5.5L14.8649 0.499999" stroke="black"/>
                        </svg>
                    </button>
                </div>
            </section>
        </>
    );
}
