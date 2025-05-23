<script lang="ts" setup>

</script>

<template>
  <div class="home-page">
    <h2 class="tf2build secondary">
      VSH Server Features
    </h2>
    <ServerFeatures />

    <h2 class="tf2build secondary">
      Discord
    </h2>
    <DiscordServerInvite />

    <h2 class="tf2build secondary">
      Servers
    </h2>    
    <ServerList />
  </div>
</template>

<style scoped lang="scss">

h2 {
  margin: 1rem;
}

.home-page {
  margin-bottom: 10rem;
}

@media (width <= $phone-res)
{
  .home-page {
    margin-bottom: calc(10rem * var(--phone-res-mult));
  }
}
</style>