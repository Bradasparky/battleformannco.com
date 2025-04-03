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
  <div style="width: 100%">
    <h2 class="tf2build secondary">
      Discord
    </h2>
    <div class="discord-badge">
      <p class="discord-invite-header">
        Join the Discord server!
      </p>
        <div class="discord-invite-bottom">
          <img class="discord-invite-badge-image" src="https://cdn.discordapp.com/icons/1241512258450751539/1a947522b12f7d3d507d3bfb12e4527d.webp?size=160&quality=lossless">
          <div class="discord-invite-server-info-top">
            <span class="discord-invite-server-name">
              Battle For Mann Co.
            </span>
            <!-- <span class="infoBadge_ae2544"><div class="guildIconV2Container__85d16"><div class="" tabindex="-1" role="button"><div class="flowerStarContainer__3e3b0 guildBadge__85d16" style="width: 18px; height: 18px;"><svg class="flowerStar__3e3b0" aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 16 15.2"><path fill="var(--white-400)" fill-rule="evenodd" d="m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"></path></svg><div class="childContainer__3e3b0"><svg aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="none" viewBox="0 0 24 24"><path fill="var(--primary-500)" d="m2.4 8.4 8.38-6.46a2 2 0 0 1 2.44 0l8.39 6.45a2 2 0 0 1-.79 3.54l-.32.07-.82 8.2a2 2 0 0 1-1.99 1.8H16a1 1 0 0 1-1-1v-5a3 3 0 1 0-6 0v5a1 1 0 0 1-1 1H6.31a2 2 0 0 1-1.99-1.8L3.5 12l-.32-.07a2 2 0 0 1-.79-3.54Z" class=""></path></svg></div></div></div><span style="display: none;"></span></div></span> 
            <div class="discord-invite-member-info">
              <i style="height: 8px; width: 8px; background-color: rgb(67, 162, 90); border-radius: 4px; margin-right: 4px, ">
                
              </i>
              <span></span>
            </div>-->
          </div>

          <a href="https://discord.gg/EeGxbzmbAm" target="_blank">
            <button class="discord-join-button">
              Join
            </button>
          </a>
        </div>
      </div>
    </div>

    <div>
      <h2 class="tf2build secondary">
        Servers
      </h2>

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
    </div>
</template>

<style scoped>

</style>