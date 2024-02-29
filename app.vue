<script setup lang="ts">
const route = useRoute()
</script>

<template>
    <NuxtPage/>
</template>

<!-- для будущего меня: scoped обязательно убирать, иначе margin от Nuxt останется -->
<style lang='scss'>
body {
  margin: 0;
  padding: 0;
  border: 0;

  background: $index-p__bg;
}
</style>