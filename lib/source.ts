import { docs } from "fumadocs-mdx:collections/server";
import { type InferPageType, loader } from "fumadocs-core/source";
import { lucideIconsPlugin } from "fumadocs-core/source/lucide-icons";
import { openapi } from "@/lib/openapi";

const openapiSource = await openapi.staticSource({
  per: "operation",
  groupBy: "tag",
  baseDir: "browser-sessions",
  meta: true,
});

// See https://fumadocs.dev/docs/headless/source-api for more info
export const source = loader({
  baseUrl: "/docs",
  source: {
    docs: docs.toFumadocsSource(),
    openapi: openapiSource,
  },
  plugins: [lucideIconsPlugin(), openapi.loaderPlugin()],
});

export function getPageImage(page: InferPageType<typeof source>) {
  const segments = [...page.slugs, "image.png"];

  return {
    segments,
    url: `/og/docs/${segments.join("/")}`,
  };
}

export async function getLLMText(page: InferPageType<typeof source>) {
  if ("getAPIPageProps" in page.data) {
    return `# ${page.data.title}

${page.data.description ?? ""}`;
  }

  const processed = await page.data.getText("processed");

  return `# ${page.data.title}

${processed}`;
}
