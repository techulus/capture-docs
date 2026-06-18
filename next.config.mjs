import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // The OpenAPI spec lives in `public/` and is read from disk at runtime by
  // `openapi.staticSource()` (see lib/source.ts). `public/` is not bundled into
  // serverless functions by default, so on Vercel the file is missing and the
  // module init throws, 500ing every route that imports `@/lib/source`
  // (including /api/search and the /docs index). Trace the spec into those
  // functions so the path resolves at runtime.
  outputFileTracingIncludes: {
    "/api/search": ["./public/openapi/**/*"],
    "/docs/**": ["./public/openapi/**/*"],
    "/llms-full.txt": ["./public/openapi/**/*"],
    "/og/docs/**": ["./public/openapi/**/*"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.capture.page",
      },
      {
        protocol: "https",
        hostname: "edge.capture.page",
      },
    ],
  },
};

export default withMDX(config);
