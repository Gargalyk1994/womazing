import { prisma } from "@/prisma/prisma";

export const products = await prisma.product.findMany({
    include: {
        items: true
    }
})


export const productsItemsPrice = products
    .map((product) => product.items
    .map((item) => item.price))
    .map((product) => Math.min(...product));
export const productsItemsOldPrice = products
    .map((product) => product.items
    .map((item) => item.oldPrice))
    .map((prices) =>  Math.min(...prices));