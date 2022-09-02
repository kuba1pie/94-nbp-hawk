<template>
  <header class="header">
    <div class="pageLogo m-6">
      <span class="border-5 border-blue-500/50 font-serif p-3">NBP-hawk</span>
    </div>
  </header>
</template>

<script setup lang="ts">
const store = useDefaultStore();
</script>
<style lang="scss" scope>
.header {
  border-bottom: 2px solid #333c44;
  width: 100vw;
}
</style>
