import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  components: { global: true, dirs: ["~/components"] },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  sourcemap: {
    server: false,
    client: false,
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          const isModulePreloadSourcemapWarn =
            warning.plugin === "nuxt:module-preload-polyfill" &&
            warning.message.includes("Sourcemap is likely to be incorrect");

          if (isModulePreloadSourcemapWarn) {
            return;
          }

          warn(warning);
        },
      },
    },
  },
  colorMode: {
    preference: "dark",
    fallback: "dark",
    dataValue: "theme",
  },
});
