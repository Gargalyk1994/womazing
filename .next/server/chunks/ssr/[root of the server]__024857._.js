module.exports = {

"[externals]/@prisma/client [external] (@prisma/client, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}}),
"[project]/prisma/prisma.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
// prisma.ts
__turbopack_context__.s({
    "prisma": (()=>prisma)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) globalForPrisma.prisma = prisma;
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/shared/services/instance.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "axiosInstance": (()=>axiosInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-rsc] (ecmascript)");
;
const axiosInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});
}}),
"[project]/shared/services/cart.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "addCartItem": (()=>addCartItem),
    "getCart": (()=>getCart),
    "removeCartItem": (()=>removeCartItem),
    "updateItemQuantity": (()=>updateItemQuantity)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$instance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/services/instance.ts [app-rsc] (ecmascript)");
;
const getCart = async ()=>{
    return (await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$instance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axiosInstance"].get("/cart")).data;
};
const updateItemQuantity = async (itemId, quantity)=>{
    return (await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$instance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axiosInstance"].patch("/cart/" + itemId, {
        quantity
    })).data;
};
const removeCartItem = async (id)=>{
    return (await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$instance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axiosInstance"].delete("/cart/" + id)).data;
};
const addCartItem = async (values)=>{
    return (await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$instance$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["axiosInstance"].post("/cart", values)).data;
};
}}),
"[project]/shared/services/api-client.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Api": (()=>Api)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/services/cart.ts [app-rsc] (ecmascript)");
;
const Api = {
    cart: __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
};
}}),
"[project]/shared/constants/products.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "colorsProducts": (()=>colorsProducts),
    "mapColorsProducts": (()=>mapColorsProducts),
    "mapSizesProducts": (()=>mapSizesProducts),
    "sizesProducts": (()=>sizesProducts)
});
const mapSizesProducts = {
    1: "S",
    2: "M",
    3: "L",
    4: "XL",
    5: "XXL"
};
const mapColorsProducts = {
    1: "фиолетовый",
    2: "серый",
    3: "розовый",
    4: "оранжевый"
};
const sizesProducts = Object.entries(mapSizesProducts).map(([value, size])=>({
        size,
        value
    }));
const colorsProducts = Object.entries(mapColorsProducts).map(([value, color])=>({
        color,
        value
    }));
}}),
"[project]/shared/lib/get-available-products.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAvailableProducts": (()=>getAvailableProducts)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$constants$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/constants/products.ts [app-rsc] (ecmascript)");
;
const getAvailableProducts = (items, size)=>{
    const filteredProductsBySizes = items.filter((item)=>item.size === size);
    return __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$constants$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["colorsProducts"].map((item)=>({
            color: item.color,
            value: item.value,
            disabled: !filteredProductsBySizes.some((product)=>product.color === Number(item.value))
        }));
};
}}),
"[project]/shared/lib/get-cart-item-details.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCartItemDetails": (()=>getCartItemDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$constants$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/constants/products.ts [app-rsc] (ecmascript)");
;
const getCartItemDetails = (productSize, productColor)=>{
    const details = [];
    if (productSize && productColor) {
        const sizeName = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$constants$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapSizesProducts"][productSize];
        const colorName = __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$constants$2f$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mapColorsProducts"][productColor];
        details.push(`Размер ${sizeName} цвет ${colorName}`);
    }
    return details.join(", ");
};
}}),
"[project]/shared/lib/calc-cart-item-total-price.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "calcCartItemTotalPrice": (()=>calcCartItemTotalPrice)
});
const calcCartItemTotalPrice = (item)=>{
    return item.productItem.price * item.quantity;
};
}}),
"[project]/shared/lib/get-cart-details.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getCartDetails": (()=>getCartDetails)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$calc$2d$cart$2d$item$2d$total$2d$price$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/calc-cart-item-total-price.ts [app-rsc] (ecmascript)");
;
const getCartDetails = (data)=>{
    const items = data.items.map((item)=>({
            id: item.id,
            quantity: item.quantity,
            name: item.productItem.product.name,
            imageUrl: item.productItem.product.image,
            price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$calc$2d$cart$2d$item$2d$total$2d$price$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calcCartItemTotalPrice"])(item),
            productSize: item.productItem.size,
            productColor: item.productItem.color,
            disabled: false
        }));
    return {
        items,
        totalAmount: data.totalAmount
    };
};
}}),
"[project]/shared/lib/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
;
}}),
"[project]/shared/lib/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$available$2d$products$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/get-available-products.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$cart$2d$item$2d$details$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/get-cart-item-details.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$cart$2d$details$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/get-cart-details.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shared/lib/index.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/shared/store/cart.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useCartStore": (()=>useCartStore)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/services/api-client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/shared/lib/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$cart$2d$details$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/lib/get-cart-details.ts [app-rsc] (ecmascript)");
;
;
;
const useCartStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        items: [],
        error: false,
        loading: true,
        totalAmount: 0,
        fetchCartItems: async ()=>{
            try {
                set({
                    loading: true,
                    error: false
                });
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Api"].cart.getCart();
                set((0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$cart$2d$details$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartDetails"])(data));
            } catch (error) {
                console.error(error);
                set({
                    error: true
                });
            } finally{
                set({
                    loading: false
                });
            }
        },
        updateItemQuantity: async (id, quantity)=>{
            try {
                set({
                    loading: true,
                    error: false
                });
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Api"].cart.updateItemQuantity(id, quantity);
                set((0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$cart$2d$details$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartDetails"])(data));
            } catch (error) {
                console.error(error);
                set({
                    error: true
                });
            } finally{
                set({
                    loading: false
                });
            }
        },
        removeCartItem: async (id)=>{
            try {
                set((state)=>({
                        loading: true,
                        error: false,
                        items: state.items.map((item)=>item.id === id ? {
                                ...item,
                                disabled: true
                            } : item)
                    }));
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Api"].cart.removeCartItem(id);
                set((0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$cart$2d$details$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartDetails"])(data));
            } catch (error) {
                console.error(error);
                set({
                    error: true
                });
            } finally{
                set((state)=>({
                        loading: false,
                        items: state.items.map((item)=>({
                                ...item,
                                disabled: false
                            }))
                    }));
            }
        },
        addCartItem: async (values)=>{
            try {
                set({
                    loading: true,
                    error: false
                });
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$services$2f$api$2d$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Api"].cart.addCartItem(values);
                set((0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$lib$2f$get$2d$cart$2d$details$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCartDetails"])(data));
            } catch (error) {
                console.error(error);
                set({
                    error: true
                });
            } finally{
                set({
                    loading: false
                });
            }
        }
    }));
}}),
"[project]/shared/store/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/shared/store/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/cart.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/shared/store/index.ts [app-rsc] (ecmascript) <locals>");
}}),
"[project]/app/(pages)/shop/category/[idx]/product/[id]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProductPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/prisma/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$shared$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/shared/components/shared/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$shared$2f$choice$2d$product$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/components/shared/choice-product.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/shared/store/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shared/store/cart.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function ProductPage({ params: { id } }) {
    const product = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].product.findFirst({
        where: {
            id: Number(id)
        }
    });
    const productItems = await __TURBOPACK__imported__module__$5b$project$5d2f$prisma$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].productItem.findMany({
        where: {
            productId: Number(id)
        }
    });
    if (!product) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const firstItem = productItems[0];
    const addCartItem = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$store$2f$cart$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useCartStore"])((state)=>state.addCartItem);
    const onAddProduct = ()=>{
        addCartItem({
            productItemId: firstItem.id
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shared$2f$components$2f$shared$2f$choice$2d$product$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ChoiceProduct"], {
                imageUrl: product.image,
                alt: product.alt,
                items: productItems,
                onSubmit: onAddProduct
            }, void 0, false, {
                fileName: "[project]/app/(pages)/shop/category/[idx]/product/[id]/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "similar-products center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "similar-products__title",
                        children: "Связанные товары"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/shop/category/[idx]/product/[id]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "similar-products__wrap products"
                    }, void 0, false, {
                        fileName: "[project]/app/(pages)/shop/category/[idx]/product/[id]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(pages)/shop/category/[idx]/product/[id]/page.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}}),
"[project]/app/(pages)/shop/category/[idx]/product/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/(pages)/shop/category/[idx]/product/[id]/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/.next-internal/server/app/(pages)/shop/category/[idx]/product/[id]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__024857._.js.map