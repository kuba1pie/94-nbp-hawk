import axios from "axios";
import { defineStore } from "pinia";
import type { Rate } from "../types/types";

export const useDefaultStore = defineStore("defaultStore", {
  state: () => ({
    formData: {
      currencyToSell: 1,
      amountToSell: 100,
    },
    rates: [] as Rate[],
    swap: false as boolean,
    selectedRate: 0,
  }),
  actions: {
    async getRates() {
      const url = "https://api.nbp.pl/api/exchangerates/tables/a/?format=json";
      try {
        const data = await axios.get(url);
        this.rates = data.data[0].rates;
        this.selectedRate = this.rates[1].mid;
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
          state.selectedRate
        : (state.formData.amountToSell / state.formData.currencyToSell) *
          state.selectedRate,
    result: (state) =>
      (state.formData.amountToSell * state.formData.currencyToSell) /
      state.selectedRate,
    resultFixed() {
      let result: string = this.result.toFixed(2);
      let parsedResult: number = parseFloat(result);
      return parsedResult;
    },
  },
});
