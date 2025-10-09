<script lang="ts" setup>
import type { FHR3CcKcnHdlsHWzr5RZ5KMJ0EvSkVlWXnHV23RyWXo as GameServerInfo } from '~/constants/servers';
import toMapName from '~/utils/source/toMapName';
import uriConnect from '~/utils/steam/uriConnect';

const { data, error, pending } = await useLazyFetch<GameServerInfo[]>("/api/servers");

const copyServerIp = (ip: string) => {
  navigator.clipboard.writeText(ip)
  .then(() => alert("IP address has been copied to clipboard."))
  .catch(console.error);
}
</script>

<template>
  <div>
    <div v-if="pending">
      <h6 class="text-center text-xl">Fetching server info...</h6>
      <UProgress animation="swing" color="neutral" class="w-50% mx-auto my-4" />
    </div>
    <div v-else-if="error">
      <h6 class="text-center text-xl">Error fetching server info.</h6>
    </div>
    <table v-else class="mx-auto border-4 border-[var(--tf2-beige)] border-solid">
      <thead class="font-[TF2_Build]">
        <tr>
          <th>Servers</th>
          <th>Map</th>
          <th>Players</th>
          <th>Address</th>
          <th class="join-via-steam">Join via Steam</th>
        </tr>
      </thead>

      <tbody class="font-[TF2_Secondary]">
        <tr v-for="server in data" :key="server.steamid">
          <td>{{server.name}}</td>
          <td>{{toMapName(server.map)}}</td>
          <td class="text-center">
            {{server.players}} / {{server.maxPlayers}}
          </td>
          <td>
            <span class="font-mono text-sm cursor-copy border-b-2 border-dotted" title="Click to copy" @click="copyServerIp(server.addr)">
              {{server.addr}}
            </span>
          </td>
          <td class="text-center">
            <a :href="uriConnect(server.addr)">
              <span class="bg-[var(--tf2-dark-orange)] rounded-md px-4 py-2">
                Connect
              </span>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
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