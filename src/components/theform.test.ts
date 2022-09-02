import { mount } from "@vue/test-utils";
import TheForm from "./TheForm.vue";
import { setActivePinia, createPinia } from "pinia";
const app = createApp({});

beforeEach(() => {
  const pinia = createPinia();
  app.use(pinia);
  setActivePinia(pinia);
});

describe("TheForm.vue", () => {
  test("renders correct component", () => {
    const wrapper = mount(TheForm);
    expect(wrapper.classes()).toEqual(expect.arrayContaining(["form"]));
  });
});
