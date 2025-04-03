<script lang="ts" setup>
const route = useRoute();
console.log("Full path:", route.fullPath);
</script>

<template>
  <div>
    <h2>Servers</h2>
    <p style="white-space: pre-wrap;">
      1

      2
      
      3
    </p>

    Now we're on the servers page!!

    <UButton href="steam://connect/74.91.113.144:27015">Server 1</UButton>
    <UButton href="steam://connect/74.91.113.144:27016">Server 2</UButton>
  </div>
</template>

<style scoped>

</style>
