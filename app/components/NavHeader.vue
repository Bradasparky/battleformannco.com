<script lang="ts" setup>

</script>

<template>
  <div>
    <h1 class="text-5xl text-center">
      Battle For Mann Co.
    </h1>
    <div class="flex flex-row gap-8 justify-center">
      <NuxtLink to="/" class="nav">Home</NuxtLink>
      <NuxtLink to="/rules" class="nav">Rules</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.nav {
  font-family: "TF2 Build";
  color: var(--tf2-orange);
  padding-bottom: 0.1em;
  border-bottom: 0.1em solid;
}

.router-link-active {
  color: var(--tf2-beige);
}
</style>
