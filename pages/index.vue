<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData("page", () => {
  return queryCollection("content").path(route.path).first();
});
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
  </div>
</template>

<style>

</style>