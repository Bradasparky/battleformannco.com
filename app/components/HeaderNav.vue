<script lang="ts" setup>

</script>

<template>
  <div>
    <NuxtLink to="/" class="tf2build primary nav-buttons">Home</NuxtLink>
    <NuxtLink to="/rules" class="tf2build primary nav-buttons">Rules</NuxtLink>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  margin: 0em 2em;
  align-items: center;

}

.nav-buttons {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid;
  border-bottom-color: var(--tf2-orange);
  border-width: 0.1em;
}

.router-link-active {
  color: var(--tf2-beige);
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: solid;
  border-bottom-color: var(--tf2-beige);
  border-width: 0.1em;
}
</style>