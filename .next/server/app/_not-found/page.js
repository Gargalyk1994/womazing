const CHUNK_PUBLIC_PATH = "server/app/_not-found/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_next_dist_c21fe5._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__3c00be._.js");
runtime.loadChunk("server/chunks/ssr/_d2fd3d._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/_not-found/page/actions.js [app-rsc] (server actions loader, ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/_not-found/page { MODULE_0 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
