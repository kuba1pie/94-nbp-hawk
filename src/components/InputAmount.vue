<template>
  <div class="inputs flex justify-center p-10">
    <input v-model="formData.amountToSell" class="text-10 m-3" />
    <span class="text-20" @click="swapValues()">&#8646;</span>

    <input v-model="formResult" disabled class="text-10 m-3" />
  </div>
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
<style lang="scss">
.inputs {
  font-size: 20px;
}
</style>
