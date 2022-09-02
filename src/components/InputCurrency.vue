<template>
  <select v-model="formData.currencyToSell">
    <option value="1">PLN - złoty polski</option>
    <option
      v-for="currency in currencies"
      :key="currency.code"
      :value="currency.mid"
    >
      {{ currency.code }} - {{ currency.currency }}
    </option>
  </select>
  <select v-model="formData.currencyToBuy">
    <option value="1">PLN - złoty polski</option>
    <option
      v-for="currency in currencies"
      :key="currency.code"
      :value="currency.mid"
    >
      {{ currency.code }} - {{ currency.currency }}
    </option>
  </select>
</template>
<script setup lang="ts">
const store = useDefaultStore();
const currencies = computed(() => store.rates);

const formData = computed(() => store.formData);
</script>
