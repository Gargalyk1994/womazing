
import { prisma } from "./prisma";
import { hashSync } from "bcrypt";

{
    /*Функция генерации данных */
}

async function up() {
    await prisma.user.createMany({
        data: [
            {
                fullName: "User",
                email: "user@test.ru",
                password: hashSync("111111", 10),
            },
            {
                fullName: "User2",
                email: "user2@test.ru",
                password: hashSync("111111", 10),
            },
        ],
    });
    await prisma.category.createMany({
        data: [
            {
            name: 'Все',
            },
            {
            name: 'Пальто',
            },
            {
            name: 'Свитшоты',
            },
            {
            name: 'Кардиганы',
            },
            {
            name: 'Толстовки',
            },
        ],
    });
    await prisma.product.createMany({
        data: [ 
            {
                name: "Футболка USA",
                image: "https://media.baamboozle.com/uploads/images/151036/1617903626_78219_url.jpeg",
                alt: "product1",
                categoryId: 1
            },
            {
                name: "Купальник Glow",
                image: "https://static18.tgcnt.ru/posts/_0/8b/8b9243461b71b0b215672e45a039cf0e.jpg",
                alt: "product2",
                categoryId: 3
            },
            {
                
                name: "Свитшот Sweet Shot",
                image: "https://static.tildacdn.com/tild3062-6333-4439-a431-393336626635/Mask_Group-3.png",
                alt: "product3",
                categoryId: 4
            },
            {
                name: "Футболка USA",
                image: "https://media.baamboozle.com/uploads/images/151036/1617903626_78219_url.jpeg",
                alt: "product1",
                categoryId: 3
            },
            {
                name: "Купальник Glow",
                image: "https://static18.tgcnt.ru/posts/_0/8b/8b9243461b71b0b215672e45a039cf0e.jpg",
                alt: "product2",
                categoryId: 2
            },
            {
                
                name: "Свитшот Sweet Shot",
                image: "https://static.tildacdn.com/tild3062-6333-4439-a431-393336626635/Mask_Group-3.png",
                alt: "product3",
                categoryId: 4
            },
            {
                name: "Футболка USA",
                image: "https://media.baamboozle.com/uploads/images/151036/1617903626_78219_url.jpeg",
                alt: "product1",
                categoryId: 2
            },
            {
                name: "Купальник Glow",
                image: "https://static18.tgcnt.ru/posts/_0/8b/8b9243461b71b0b215672e45a039cf0e.jpg",
                alt: "product2",
                categoryId: 5
            },
            {
                name: "Свитшот Sweet Shot",
                image: "https://static.tildacdn.com/tild3062-6333-4439-a431-393336626635/Mask_Group-3.png",
                alt: "product3",
                categoryId: 4
            },
        ],
    });
    await prisma.productItem.createMany({
        data: [
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 500 * 10) / 10,
                oldPrice: (Math.floor(Math.random() * (700 - 110) * 10 + 500 * 10) / 10) * 1.2,
                size: 1,
                color: 1,
                productId: 1,
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 500 * 10) / 10,
                size: 2,
                color: 2,
                productId: 1
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 3,
                productId: 1
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                oldPrice: (Math.floor(Math.random() * (700 - 110) * 10 + 500 * 10) / 10) * 1.2,
                size: 4,
                color: 4,
                productId: 1
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                oldPrice: (Math.floor(Math.random() * (700 - 110) * 10 + 500 * 10) / 10) * 1.2,
                size: 4,
                color: 3,
                productId: 1
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                oldPrice: (Math.floor(Math.random() * (700 - 110) * 10 + 500 * 10) / 10) * 1.2,
                size: 1,
                color: 3,
                productId: 1
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                oldPrice: (Math.floor(Math.random() * (700 - 110) * 10 + 500 * 10) / 10) * 1.2,
                size: 5,
                color: 3,
                productId: 2
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 1,
                color: 2,
                productId: 2
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 1,
                color: 4,
                productId: 2
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 4,
                productId: 3
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 1,
                productId: 3
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 4,
                productId: 3
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 1,
                productId: 3
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 5,
                color: 1,
                productId: 3
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 4,
                color: 4,
                productId: 4
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 1,
                color: 3,
                productId: 4
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 1,
                color: 2,
                productId: 4
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 1,
                color: 4,
                productId: 4
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 3,
                productId: 4
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 3,
                productId: 5
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 4,
                productId: 5
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 2,
                productId: 5
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 3,
                productId: 5
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 1,
                color: 3,
                productId: 5
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 5,
                color: 3,
                productId: 5
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 5,
                color: 2,
                productId: 6
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 5,
                color: 1,
                productId: 6
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 1,
                productId: 6
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 2,
                productId: 6
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 1,
                productId: 6
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 1,
                productId: 7
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 2,
                productId: 7
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 2,
                productId: 7
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 4,
                productId: 7
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 4,
                color: 2,
                productId: 7
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 4,
                color: 2,
                productId: 8
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 5,
                color: 2,
                productId: 8
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 4,
                color: 1,
                productId: 8
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 2,
                color: 2,
                productId: 8
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 1,
                productId: 8
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 1,
                productId: 9
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 2,
                productId: 9
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 1,
                color: 2,
                productId: 9
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 3,
                color: 4,
                productId: 9
            },
            {
                price: Math.floor(Math.random() * (700 - 110) * 10 + 110 * 10) / 10,
                size: 5,
                color: 1,
                productId: 9
            },
        ],
    });
    await prisma.cart.createMany({
        data: [
            {
                userId: 1,
                totalAmount: 0,
                token: "11111",
            },
            {
                userId: 2,
                totalAmount: 0,
                token: "222222",
            },
        ],
    });
    await prisma.cartItem.create({
        data:
            {
                productItemId: 1,
                cartId: 1,
                quantity: 1
            },
    });

    // await prisma.crumbs.createMany({
    //     data: [
    //         {
    //             text: "Главная",
    //             url: "/",
    //             breadcrumbsId: 1
    //         },
    //         {
    //             text: "Магазин",
    //             url: "/shop",
    //             breadcrumbsId: 1
    //         },
    //         {
    //             text: "О бренде",
    //             url: "/brand",
    //             breadcrumbsId: 2
    //         },
    //         {
    //             text: "Оформление заказа",
    //             url: "/get-order",
    //             breadcrumbsId: 3
    //         },
    //         {
    //             text: "Заказ получен",
    //             url: "/get-order/success-order",
    //             breadcrumbsId: 4
    //         },
    //         {
    //             text: "Свитшоты",
    //             url: "/category",
    //             breadcrumbsId: 3
    //         },
    //         {
    //             text: "Свитшот Sweet Shot",
    //             url: "/category/product/[id]",
    //             breadcrumbsId: 3
    //         },
    //         {
    //             text: "Контакты",
    //             url: "/contacts",
    //             breadcrumbsId: 3
    //         },
    //         {
    //             text: "Корзина",
    //             url: "/cart",
    //             breadcrumbsId: 3
    //         },
    //     ],
    // });
    // await prisma.breadcrumbsItems.create({
    //     data: [
    //         {
    //             title: "shop",
    //             namePage: "Магазин",
    //             productId: 1,
    //             crumbs: {
    //                 connect: [
    //                     {
    //                         text: "Главная",
    //                         url: "/",
    //                         breadcrumbsId: 3
    //                     },
    //                     {
    //                         text: "Магазин",
    //                         url: "/shop",
    //                         breadcrumbsId: 3
    //                     },
    //                 ],
    //             },
    //         }
    //     ]
    // });
    // await prisma.breadcrumbsItems.create({
    //     data: [
    //         {
    //             title: "brand",
    //             namePage: "О бренде",
    //             crumbs: [
    //                 {
    //                     text: "Главная",
    //                     url: "/"
    //                 },
    //                 {
    //                     text: "О бренде",
    //                     url: "/brand"
    //                 },
    //             ]
    //         },
    //     ]
    // });
    // await prisma.breadcrumbsItems.create({
    //     data: [
    //         {
    //             title: "get-order",
    //             namePage: "Заказ получен",
    //             breadcrumbs: [
    //                 {
    //                     text: "Главная",
    //                     url: "/"
    //                 },
    //                 {
    //                     text: "Оформление заказа",
    //                     url: "/get-order"
    //                 },
    //                 {
    //                     text: "Заказ получен",
    //                     url: "/get-order/success-order"
    //                 },
    //             ]
    //         }
    //     ]
    // });
    // await prisma.breadcrumbsItems.create({
    //     data: [
    //         {
    //             title: "product",
    //             namePage: "Свитшоты",
    //             breadcrumbs: [
    //                 {
    //                     text: "Главная",
    //                     url: "/"
    //                 },
    //                 {
    //                     text: "Свитшоты",
    //                     url: "/category"
    //                 },
    //                 {
    //                     text: "Свитшот Sweet Shot",
    //                     url: "/category/product/[id]"
    //                 },
    //             ]
    //         }
    //     ]
    // });
    // await prisma.breadcrumbsItems.create({
    //     data: [
    //         {
    //             title: "contacts",
    //             namePage: "Контакты",
    //             breadcrumbs: [
    //                 {
    //                     text: "Главная",
    //                     url: "/"
    //                 },
    //                 {
    //                     text: "Контакты",
    //                     url: "/contacts"
    //                 },
    //             ]
    //         }
    //     ]
    // });
    // await prisma.breadcrumbsItems.create({
    //     data: [
    //         {
    //             title: "cart",
    //             namePage: "Корзина",
    //             breadcrumbs: [
    //                 {
    //                     text: "Главная",
    //                     url: "/"
    //                 },
    //                 {
    //                     text: "Корзина",
    //                     url: "/cart"
    //                 },
    //             ]
    //         }
    //     ]
    // });

}

{
    /*Функция удаления данных */
}
async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
    await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
    await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
    await prisma.$executeRaw`TRUNCATE TABLE "BreadcrumbsItems" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
    await prisma.$executeRaw`TRUNCATE TABLE "Crumbs" RESTART IDENTITY CASCADE`; //используй SQL и удали всех пользоавтелей их id и всё что с ними связано
}
async function main() {
    try {
        await down();
        await up();
    } catch (e) {
        console.error(e);
    }
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
