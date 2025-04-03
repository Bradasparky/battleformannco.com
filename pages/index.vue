<script lang="ts" setup>
import '~/assets/css/main.css';
import homePage from '~/components/home-page.vue';

// For the Content Renderer
/*const route = useRoute();
const { data: page } = await useAsyncData("page", () => {
  return queryCollection("content").path(route.path).first();
});

console.log("Full path:", route.fullPath);
console.log("Params:", route.params);*/

useHead({
  title: "Battle For Mann Co.",
  meta: [
    {
      charset: "UTF-8",
    },
    {
      name: 'viewport',
      content: "width=device-scale, initial-scale=1",
    },
  ],
});
</script>

<template>
  <div>
    <homePage />
    <!--
    <div>
      <h1>Hello World</h1>
      <home />
      <ContentRenderer v-if="page" :value="page" />
      <a href="servers">View Servers</a>
    </div>
    -->
  </div>
</template>
