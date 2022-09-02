<template>
  <div class="v-index flex flex-col text-10">
    <TheHeader />
    <main class="main flex justify-center m-2">
      <TheForm />
    </main>
  </div>
</template>
<script setup lang="ts">
const store = useDefaultStore();
store.getRates();
</script>
<style lang="scss">
@media (max-width: 1000px) {
  .text-10 {
    font-size: 1.5rem;
  }
}
</style>
