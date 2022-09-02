import axios from "axios";
import { defineStore } from "pinia";
import type { Rate } from "../types/types";

export const useDefaultStore = defineStore("defaultStore", {
  state: () => ({
    response: {} as Response,
    formData: {
      currencyToSell: 1,
      currencyToBuy: 0,
      amountToSell: 100,
      amountToBuy: 0,
    },
    rates: [] as Rate[],
    swap: false as boolean,
  }),
  actions: {
    async getRates() {
      const url = "http://api.nbp.pl/api/exchangerates/tables/a/?format=json";
      try {
        const data = await axios.get(url);
        this.rates = data.data[0].rates;
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
  },
  getters: {
    swapValue: (state) =>
      state.swap
        ? (state.formData.amountToSell * state.formData.currencyToSell) /
          state.formData.currencyToBuy
        : (state.formData.amountToSell / state.formData.currencyToSell) *
          state.formData.currencyToBuy,
    result: (state) =>
      (state.formData.amountToSell * state.formData.currencyToSell) /
      state.formData.currencyToBuy,
  },
});
