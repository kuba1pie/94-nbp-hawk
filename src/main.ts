import { createApp } from "vue";
import { createPinia } from "pinia";
import "uno.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createHead } from "@vueuse/head";

import routes from "~pages";

const pinia = createPinia();
const router = createRouter({
  history: createWebHistory(),
  routes,
});
const head = createHead();

createApp(App).use(pinia).use(router).use(head).mount("#app");
