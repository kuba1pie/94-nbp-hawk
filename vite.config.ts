/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import Pages from "vite-plugin-pages";
import Unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "@vueuse/head"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store", "src/types"],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue", "md"],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
    Pages({
      dirs: [{ dir: "src/pages", baseRoute: "" }],
    }),
    Unocss({
      /* options */
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
  },
});
