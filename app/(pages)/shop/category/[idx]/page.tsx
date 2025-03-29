import { prisma } from '@/prisma/prisma';
import { Categories, PaginationShop, ProductCard } from '@/shared/components/shared';
import '../../shop.scss';
import { notFound } from 'next/navigation';


export default async function CategoryPage({ params: { idx } } : { params: { idx: string }}) {

    
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

    const category = await prisma.category.findFirst({
        where: { 
            id: Number(idx)
        },
    });
        
    if (!category) {
        return notFound();
    }
    

    const products = await prisma.product.findMany({
        include: {
            items: true
        }
    })

    const filteredProducts = products.filter((product) => product.categoryId === Number(idx));

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
            <section className="catalog center">
                <Categories 
                    categories={categories.filter((category) => category.products.length > 0)}
                    activeCategoryId={Number(idx)}
                />
                <p className="counter-products">Показано: 9 из {products.length} товаров</p>
                <div className="products">
                    {Number(idx) === 1 ? 
                        products.map((product, i) => ( 
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
                        )) :
                        filteredProducts.map((product, i) => ( 
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
                    )}
                </div>
                <p className="counter-products">Показано: 9 из {products.length} товаров</p>
                <PaginationShop />
            </section>
        </>
    );
}
