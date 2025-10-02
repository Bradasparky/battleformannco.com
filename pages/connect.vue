<script lang="ts" setup>
import type { Server } from '~/constants/servers';

const query = useRoute().query as { id: string };
const indexId = parseInt(query.id);

const servers: Server[] = await useFetch(`/api/servers`)
  .then((data) => data.data.value?.response.servers || []);

const serverInfo: Server | undefined = servers[indexId];

let uriProtocol = '';
if (serverInfo) {
  uriProtocol = `steam://connect/${serverInfo.addr}`;

  useHead({
    title: "Joining Server",
    meta: [
      {
        "http-equiv": "refresh",
        content: `0; url=${uriProtocol}`,
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
    <h2 class="tf2build connect-oyw">You're on your way to:</h2>
    <h2 class="tf2build secondary">{{ serverInfo.name }}</h2>
    <h2 class="tf2build secondary connect-click-here"><a :href=uriProtocol>(Click here to connect manually)</a></h2>
  </div>
  <div v-else>
    <h2 class="tf2build not-found">Server not found</h2>
  </div>
</template>

<style>
.connect-oyw {
  color: rgb(175, 169, 149); 
  font-size: 2em;
  margin-top: 2em;
}

.connect-click-here {
  color: rgb(175, 169, 149);
  font-size: 1.5em; 
  margin-top: 0.5em;
}

.connect-click-here:hover {
  color: var(--tf2-beige);
}

.connect-click-here:active {
  color: rgb(175, 169, 149);
}

.not-found {
  color: rgb(175, 169, 149); 
  font-size: 2.5em;
  margin-top: 1em;
}
</style>