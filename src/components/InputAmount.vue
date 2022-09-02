<template>
  <input v-model="formData.amountToSell" step="0.01" />
  <span style="font-size: 100px" @click="swapValues()">&#8646;</span>

  <input v-model="formResult" disabled />
</template>
<script setup lang="ts">
const store = useDefaultStore();

const formData = computed(() => store.formData);
const $s = store.formData;
const formResult = computed(() => store.result.toFixed(2));
function swapValues() {
  [store.selectedRate, $s.currencyToSell, $s.amountToSell] = [
    $s.currencyToSell,
    store.selectedRate,
    store.resultFixed,
  ];
}
</script>
