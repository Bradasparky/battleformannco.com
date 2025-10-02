<script lang="ts" setup>
import '~/assets/css/server-list.scss';
import type { Server } from '~/constants/servers';

const copyServerIp = (ip: string) => {
  navigator.clipboard.writeText(ip)
  .then(() => alert("Copied IP address to clipboard."))
  .catch(console.error);
}

const servers: Server[] = await useFetch(`/api/servers`)
  .then((data) => data.data.value?.response.servers || []);

const steamProtocolConnectUri = (ip: string) => `steam://connect/${ip}`;
const toMapName = (map: string) => {
  const parts = map.split('_').slice(1);
  return parts
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};
</script>

<template>
  <div class="server-list-content">
    <table>
      <thead>
        <tr>
          <th>Servers</th>
          <th>Map</th>
          <th>Players</th>
          <th>Address</th>
          <th class="join-via-steam">Join via Steam</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="server in servers" :key="server.steamid">
          <td>{{server.name}}</td>
          <td>{{toMapName(server.map)}}</td>
          <td>
            {{server.players}} / {{server.max_players}}
          </td>
          <td @click="copyServerIp(server.addr)">
            <span class="ip-address">{{server.addr}}</span>
          </td>
          <td class="join-via-steam">
            <a :href="steamProtocolConnectUri(server.addr)">
              <button class="connect">
                Connect
              </button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">

.server-list-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  font-family: "TF2 Build";
  color: var(--tf2-beige);
  border-style: solid;
  border-color: var(--tf2-beige);
  border-width: var(--server-list-table-border-width);
  margin: var(--server-list-table-margin);
}

th {
  font-family: "TF2 Build";
  font-weight: 100;
  border: solid;
  border-width: var(--server-list-th-border-width);
  padding-top: var(--server-list-th-padding-top);
  padding-right: var(--server-list-th-padding-right);
  padding-bottom: var(--server-list-th-padding-bottom);
  padding-left: var(--server-list-th-padding-left);
}

tr {
  margin-top: var(--server-list-tr-margin-top);
  margin-right: var(--server-list-tr-margin-right);
  margin-bottom: var(--server-list-tr-margin-bottom);
  margin-left: var(--server-list-tr-margin-left);
}

td {
  font-family: "TF2 Secondary";
  border: solid;
  border-width: var(--server-list-td-border-width);
  padding-top: var(--server-list-td-padding-vertical);
  padding-right: var(--server-list-td-padding-horizontal);
  padding-bottom: var(--server-list-td-padding-vertical);
  padding-left: var(--server-list-td-padding-horizontal);
}

.ip-address {
  font-family: monospace;
  font-size: large;
  cursor: pointer;
}

.ip-address:hover {
  color: lightblue;
  text-decoration: underline;
}

button.connect {
  border: none;
  text-align: center;
  text-decoration: none;
  font-size: var(--server-list-connect-button-font-size);

  border-radius: var(--server-list-connect-button-border-radius);
  margin-top: var(--server-list-connect-button-margin-vertical);
  margin-right: var(--server-list-connect-button-margin-horizontal);
  margin-bottom: var(--server-list-connect-button-margin-vertical);
  margin-left: var(--server-list-connect-button-margin-horizontal);

  padding-top: var(--server-list-connect-button-padding-vertical);
  padding-right: var(--server-list-connect-button-padding-horizontal);
  padding-bottom: var(--server-list-connect-button-padding-vertical);
  padding-left: var(--server-list-connect-button-padding-horizontal);
  cursor: pointer;
  
  background-color: var(--tf2-dark-orange);
}

button.connect:hover {
  background-color: var(--tf2-orange);
}

button.connect:active {
  background-color: var(--tf2-beige);
  color: var(--tf2-dark);
}

button.connect:disabled {
  background-color: var(--tf2-dark);
  color: var(--tf2-beige);
  cursor: not-allowed;
}

.join-via-steam {
  display: flex; 
  justify-content: center;
}

@media (width <= $phone-res)
{
  table {
    border-width: calc(var(--server-list-table-border-width) * var(--phone-res-mult));
    margin: calc(var(--server-list-table-margin) * var(--phone-res-mult));
  }
  
  th {
    border-width: calc(var(--server-list-th-border-width) * var(--phone-res-mult));
    padding-top: calc(var(--server-list-th-padding-top) * var(--phone-res-mult));
    padding-right: calc(var(--server-list-th-padding-right) * var(--phone-res-mult));
    padding-bottom: calc(var(--server-list-th-padding-bottom) * var(--phone-res-mult));
    padding-left: calc(var(--server-list-th-padding-left) * var(--phone-res-mult));
  }

  tr {
    display: flex;
    flex-direction: column;
    margin-top: calc(var(--server-list-tr-margin-vertical) * var(--phone-res-mult));
    margin-right: calc(var(--server-list-tr-margin-horizontal) * var(--phone-res-mult));
    margin-bottom: calc(var(--server-list-tr-margin-vertical) * var(--phone-res-mult));
    margin-left: calc(var(--server-list-tr-margin-horizontal) * var(--phone-res-mult));
  }

  td {
    text-align: center;
    border-width: calc(var(--server-list-td-border-width) * var(--phone-res-mult));
    padding-top: calc(var(--server-list-td-padding-vertical) * var(--phone-res-mult));
    padding-right: calc(var(--server-list-td-padding-horizontal) * var(--phone-res-mult));
    padding-bottom: calc(var(--server-list-td-padding-vertical) * var(--phone-res-mult));
    padding-left: calc(var(--server-list-td-padding-horizontal) * var(--phone-res-mult));
  }

  button.connect {
    font-size: calc(var(--server-list-connect-button-font-size) * var(--phone-res-mult));
    border-radius: calc(var(--server-list-connect-button-border-radius) * var(--phone-res-mult));

    margin-top: calc(var(--server-list-connect-button-margin-vertical) * var(--phone-res-mult));
    margin-right: calc(var(--server-list-connect-button-margin-horizontal) * var(--phone-res-mult));
    margin-bottom: calc(var(--server-list-connect-button-margin-vertical) * var(--phone-res-mult));
    margin-left: calc(var(--server-list-connect-button-margin-horizontal) * var(--phone-res-mult));

    padding-top: calc(var(--server-list-connect-button-padding-vertical) * var(--phone-res-mult));
    padding-right: calc(var(--server-list-connect-button-padding-horizontal) * var(--phone-res-mult));
    padding-bottom: calc(var(--server-list-connect-button-padding-vertical) * var(--phone-res-mult));
    padding-left: calc(var(--server-list-connect-button-padding-horizontal) * var(--phone-res-mult));
  }

  .join-via-steam {
    display: none;
  }
}
</style>