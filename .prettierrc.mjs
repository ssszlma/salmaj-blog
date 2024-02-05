/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],

  tailwindConfig: "tailwind.config.mjs",

  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};

