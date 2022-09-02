<template>
  <input v-model="formData.amountToSell" />
  <span style="font-size: 100px" @click="swapValues()">&#8646;</span>

  <input v-model="store.result" disabled />
</template>
<script setup lang="ts">
const store = useDefaultStore();

const formData = computed(() => store.formData);
const $s = store.formData;
function swapValues() {
  [$s.currencyToBuy, $s.currencyToSell, $s.amountToSell] = [
    $s.currencyToSell,
    $s.currencyToBuy,
    store.result,
  ];
}
</script>
