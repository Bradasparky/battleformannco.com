<script lang="ts" setup>

</script>

<template>
  <div>
    <NuxtLink to="/" class="tf2build primary">Home</NuxtLink>
    <NuxtLink to="/rules" class="tf2build primary">Rules</NuxtLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2em;
  margin: 0em 2em;
}

.router-link-active {
  color: var(--tf2-beige);
}
</style>