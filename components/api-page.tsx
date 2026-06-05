import { withScalar } from "fumadocs-openapi/scalar";
import { createAPIPage } from "fumadocs-openapi/ui";
import { openapi } from "@/lib/openapi";

export const APIPage = createAPIPage(
  openapi,
  withScalar({
    schemaUI: {
      showExample: true,
    },
  }),
);
