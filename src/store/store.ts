import { defineStore } from "pinia";
interface Person {
  name: string;
  surname: string;
  result: boolean;
}

export const useDefaultStore = defineStore("defaultStore", {
  state: () => ({
    data: [],
  }),
});
