<script lang="ts" setup>
const route = useRoute();
const { data, pending } = await useAsyncData(route.path, () => queryCollection("content").path(route.path).first());

useSeoMeta({
  title: data.value?.title,
  description: data.value?.description
})
</script>

<template>
  <div class="mx-auto max-w-4xl">
    <div v-if="pending">Loading...</div>
    <ContentRenderer v-else-if="data" :value="data" />
    <div v-else>Error fetching rules</div>
  </div>
</template>


<style scoped>

</style>
