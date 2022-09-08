import { mount } from "@vue/test-utils";
import TheForm from "../src/components/TheForm.vue";
import { setActivePinia, createPinia } from "pinia";
const app = createApp({});
import { validResponse } from "../__mocks__/validResponse";

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
describe("theStore.vue", () => {
  let store: ReturnType<typeof useDefaultStore>;

  beforeAll(() => {
    setActivePinia(createPinia());
    const pinia = createPinia();
    app.use(pinia);
    store = useDefaultStore();
  });

  afterEach(() => {
    store.$reset();
  });

  test("get correct rates", async () => {
    await store.getRates();
    expect(store.rates).toEqual("13");
  });
});
