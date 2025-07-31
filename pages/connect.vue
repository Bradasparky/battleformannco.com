<script lang="ts" setup>
import { servers, type Server } from '~/constants/servers';

const query = useRoute().query as { id: string };
const serverInfo: Server | undefined = servers.find(server => server.id === query.id);
let uriProtocol = '';
if (serverInfo) {
  uriProtocol = `steam://connect/${serverInfo?.ip}`;

  useHead({
    title: "Joining Server",
    meta: [
      {
        "http-equiv": "refresh",
        content: `3; url=${uriProtocol}`,
      },
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
  <div v-if="serverInfo">
    <h2>You're on your way to</h2>
    <h2>{{ serverInfo.name }}</h2>
    <p>(If you want to manually connect, <a :href=uriProtocol>click here</a>)</p>
  </div>
  <div v-else>
    <h3>Server not found</h3>
    <p>Please check the server ID and try again.</p>

  </div>
</template>

<style>

</style>