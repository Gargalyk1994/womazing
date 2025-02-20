// import { prisma } from "@/prisma/prisma";

// export default async function handler(req, res) {
//   const { slug } = req.query;

//   const page = await prisma.page.findUnique({
//     where: { slug: slug },
//     include: { parent: true },
//   });

//   if (!page) {
//     return res.status(404).json({ error: 'Page not found' });
//   }

//   const breadcrumbs = [];
//   let currentPage = page;

//   while (currentPage) {
//     breadcrumbs.unshift({ title: currentPage.title, slug: currentPage.slug });
//     currentPage = currentPage.parent;
//   }

//   res.json(breadcrumbs);
// }
