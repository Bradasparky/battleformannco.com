<script lang="ts" setup>
import type { InfoResponse } from 'steam-server-query';
import toMapName from '~/utils/source/toMapName';
import uriConnect from '~/utils/steam/uriConnect';

type GameServerInfo = Pick<InfoResponse, 'name' | 'map' | 'players' | 'maxPlayers'> & {
  addr: string;
};

const { data, pending, error, refresh } = await useLazyFetch<GameServerInfo[]>("/api/v2/servers");

const copyServerIp = (ip: string) => {
  navigator.clipboard.writeText(ip)
  .then(() => alert("IP address has been copied to clipboard."))
  .catch(console.error);
}
</script>

<template>
  <div class="mx-auto w-200">
    <div v-if="pending">
      Loading...
    </div>
    <div v-else-if="data">
      <div v-for="item in data" class="py-2">
        <div class="flex justify-between">
        <div class="text-xl">{{ item.name }}</div>
        <div>{{ item.players }} of {{ item.maxPlayers }} players max</div>
      </div>
        <div>Current Map: {{ toMapName(item.map) }}</div>
        <div class="my-4">
          <a :href="uriConnect(item.addr)">
            <span class="bg-[var(--tf2-dark-orange)] rounded-md px-4 py-2 my-4">
              Connect
            </span>
          </a>
        </div>
      </div>
    </div>
    <div v-else>
      Couldn't get game server info :(
    </div>
  </div>
</template>

<style scoped>
th, td {
  padding: 0.5em 1em;
  border-style: solid;
  border-width: 1px 0px;
}

th {
  padding: 0.25em 1em;
  border-width: 2px 0px;
}
</style>