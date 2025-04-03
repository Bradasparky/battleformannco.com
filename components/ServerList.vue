<script lang="ts" setup>
import { servers } from '~/constants/servers';

const copyServerIp = (ip: string) => {
  navigator.clipboard.writeText(ip)
  .then(() => alert("Copied IP address to clipboard."))
  .catch(console.error);
}

const getSteamProtocolUri = (ip: string) => {
  return `steam://connect/${ip}`;
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Server Name</th>
        <th>IP Address</th>
        <th>Join via Steam</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="server in servers" :key="server.ip">
        <td>{{server.name}}</td>
        <td @click="copyServerIp(server.ip)">
          <span class="ip-address">
          {{server.ip}}
          </span>
        </td>
        <td style="display: flex; justify-content: center;">
          <a :href="getSteamProtocolUri(server.ip)">
            <button class="connect">
              Connect
            </button>
          </a>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.ip-address {
  font-family: monospace;
  font-size: large;
  cursor: pointer;
}

.ip-address:hover {
	color: lightblue;
	text-decoration: underline;
}
</style>