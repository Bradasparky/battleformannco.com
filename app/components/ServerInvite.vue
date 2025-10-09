<script lang="ts" setup>
import type { FHrKYga8QvAs4JSwa7X1MgKMEvsTziQPOSBISIuY5XLg as GuildInfo } from '~/constants/discord';
const guildIconUrl = "https://cdn.discordapp.com/icons/1241512258450751539/1a947522b12f7d3d507d3bfb12e4527d.webp?size=64&quality=lossless";
const guildInviteUrl = "https://discord.gg/EeGxbzmbAm";
const { data, pending } = await useLazyFetch<GuildInfo>("https://discord.com/api/guilds/1241512258450751539/widget.json");
</script>

<template>
  <div class="p-4 rounded-xl w-fit mx-auto bg-[var(--discord-gray)]">
    <p class="font-[gg_sans] color-[var(--discord-light-gray)]">Join the Discord server!</p>
    <div class=" flex flex-row items-center gap-4 my-2">
    <img class="rounded-xl" :src="guildIconUrl">
      <div class="flex flex-col color-[var(--discord-light-gray)]">
        <div class="text-2xl font-[gg_sans]">
          Battle For Mann Co.
        </div>
        <div class="flex flex-row gap-1 items-center">
          <UIcon name="material-symbols:circle" class="bg-[var(--discord-green)] size-3" />
          <div class="text-sm font-[Noto_Sans]">
            <span v-if="pending">...</span>
            <span v-else>{{ data?.members?.length ?? 0 }}</span>
            members online
          </div>
        </div>
      </div>
      <UButton class="font-[gg_sans] mx-3 px-5 py-2 color-white" size="xl" :to="guildInviteUrl" target="_blank">
        Join
      </UButton>
    </div>
  </div>
</template>

<style scoped>

</style>