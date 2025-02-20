'use client'
// import { useRouter } from "next/router";
// import { ParsedUrlQuery } from "querystring";
// import { useMemo, useState } from "react";
// import { Crumb } from "./сrumb";

// const _defaultGetTextGenerator = (param: string, query: Object) => null;
// const _defaultGetDefaultTextGenerator = (path: string) => path;

// // Вытащил часть пути разбиение, потому что его
// // будут использоваться как в качестве  «пафта» и  «проспекта»
// const generatePathParts = (pathStr: string) => {
//     const pathWithoutQuery = pathStr.split("?")[0];
//     return pathWithoutQuery.split("/").filter((v) => v.length > 0);
// };

// export default function Breadcrumbs({
//     getTextGenerator = _defaultGetTextGenerator,
//     getDefaultTextGenerator = _defaultGetDefaultTextGenerator,
// }) {
//     const router = useRouter();

//     const breadcrumbs = useMemo(
//         function generateBreadcrumbs() {
//             const asPathNestedRoutes = generatePathParts(router.asPath);
//             const pathnameNestedRoutes = generatePathParts(router.pathname);

//             const crumblist = asPathNestedRoutes.map((subpath, i) => {
//                 // Вытащить и преобразовать "[post_id]" в "post_id"
//                 const param = pathnameNestedRoutes[i]
//                     .replace("[", "")
//                     .replace("]", "");

//                 const href =
//                     "/" + asPathNestedRoutes.slice(0, i + 1).join("/");
//                 return {
//                     href,
//                     textGenerator: getTextGenerator(param, router.query),
//                     text: getDefaultTextGenerator(subpath),
//                 };
//             });

//             return [{ href: "/", text: "Home" }, ...crumblist];
//         },
//         [
//             router.asPath,
//             router.pathname,
//             router.query,
//             getTextGenerator,
//             getDefaultTextGenerator,
//         ]
//     );

//     return (
//         <div className="heading center">
//             <h2 className="heading__title">{items.title}</h2>
//                 <div className="heading__breadcrumbs">
//                 {breadcrumbs.map((crumb, i) => (
//                     <Crumb
//                         {...crumb}
//                         key={i}
//                         // last={i === breadcrumbs.length - 1}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }


// import { useEffect, useState } from "react";
// import Link from "next/link";

// export const Breadcrumbs = ({ slug }) => {
//     const [breadcrumbs, setBreadcrumbs] = useState([]);

//     useEffect(() => {
//         const fetchBreadcrumbs = async () => {
//             const response = await fetch(`../../app/api/breadcrumbs/${slug}`);
//             const data = await response.json();
//             if (response.ok) {
//                 setBreadcrumbs(data);
//             } else {
//                 console.error(data.error);
//             }
//         };
//         fetchBreadcrumbs();
//     }, [slug]);

//     return (
//         <nav>
//             <ul className="breadcrumbs">
//                 {breadcrumbs.map((breadcrumb, index) => (
//                     <li key={index}>
//                         <Link href={`/${breadcrumb.slug}`}>
//                             {breadcrumb.title}
//                         </Link>
//                         {index < breadcrumbs.length - 1 && " > "}
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// };

// export default Breadcrumbs;
