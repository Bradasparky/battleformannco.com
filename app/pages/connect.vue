<script lang="ts" setup>
import type { FHR3CcKcnHdlsHWzr5RZ5KMJ0EvSkVlWXnHV23RyWXo as GameServerInfo } from '~/constants/servers';
import toMapName from '~/utils/source/toMapName';
import uriConnect from '~/utils/steam/uriConnect';

const query = useRoute().query as { id: string };
const { data: serverInfo } = await useFetch<GameServerInfo>(`/api/servers/${query.id}`);

if (serverInfo.value) {
  useHead({
    title: "Joining Server",
    meta: [
      {
        "http-equiv": "refresh",
        content: `0; url=${uriConnect(serverInfo.value.addr)}`,
      },
      { name: "og:title", content: `Connect and join ${serverInfo.value.name}` },
      { name: "og:description", content: `Map: ${toMapName(serverInfo.value.map)}, Players: ${serverInfo.value.players} / ${serverInfo.value.max_players}` },
      { name: "og:logo", content: "https://cdn.discordapp.com/icons/1241512258450751539/1a947522b12f7d3d507d3bfb12e4527d.webp?size=64&quality=lossless" }
    ]
  });
}
else {
  useHead({
    title: "Server Not Found",
  });
}
</script>

<template>
  <div class="mx-auto max-w-4xl text-center">
    <div v-if="serverInfo">
      <h2 class="color-[var(--tf2-gray)] text-4xl">You're on your way to:</h2>
      <h2 class="text-4xl">{{ serverInfo.name }}</h2>
      <h2 class="text-4xl">{{ toMapName(serverInfo.map) }}</h2>
      <h3 class="text-2xl color-[var(--tf2-gray)] hover:color-[var(--tf2-beige)]">
          <a :href="uriConnect(serverInfo.addr)">
          (Click here to connect manually)
          </a>
        </h3>
    </div>
    <div v-else>
      <h2 class="text-4xl color-[var(--tf2-gray)]">Error: Server not found</h2>
    </div>
  </div>

</template>

<style scoped>

</style>