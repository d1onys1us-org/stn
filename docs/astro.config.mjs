// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://kittynode.io",
  integrations: [
    starlight({
      title: "Kittynode",
      logo: {
        src: "./src/assets/icon.png",
      },
      customCss: ["./src/styles/custom.css"],
      favicon: "/images/favicon.ico",
      social: {
        github: "https://github.com/kittynode/kittynode",
      },
      sidebar: [
        {
          label: "Concepts",
          items: [
            { label: "What is Kittynode?", slug: "concepts/what-is-kittynode" },
          ],
        },
      ],
    }),
  ],
});
