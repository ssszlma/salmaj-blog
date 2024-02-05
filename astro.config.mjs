import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

import { SITE_URL } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind(), mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "nord",
      wrap: false,
    },
  },
});

