import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mamad-zahiri.github.io",
  base: "iranapply.org-landing",
  integrations: [
    tailwind({
      nesting: true,
    }),
    icon(),
  ],
});

