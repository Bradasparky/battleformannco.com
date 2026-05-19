<script lang="ts" setup>
</script>

<template>
<div class="mx-auto max-w-4xl outline-dashed outline-2 p-4">
  <h3 class="text-2xl">Objective Based Queue System</h3>
  <ul class="list-disc list-inside">
    <li>Upon reaching damage milestones 250, 450, and 750, you'll be rewarded 1 queue point each.</li>
    <li>On Medic, you'll be rewarded queue points based on healing.</li>
    <li>On Civilian, you'll be rewarded queue points based on boosts granted to your teammates.</li>
    <li>Once you become Hale, your queue points will reset.</li>
    <li>Your queue points will stay with you between maps and upon disconnecting.</li>
  </ul>

  <h3 class="text-2xl">Damage Scoreboard</h3>
  <ul class="list-disc list-inside">
    <li>At the end of each round, you'll be shown the top 5 damaging players.</li>
    <li>This scoreboard will detail the total damage dealt for the top 5 players and the percentage of damage dealt.</li>
  </ul>

  <h3 class="text-2xl">Polished VSH HUD</h3>
  <ul class="list-disc list-inside">
    <li>Your damage, damage of players you spectate, Hale's health, and mercs left alive are all displayed at the top.</li>
    <li>The HUD will react when Hale takes damage, and when mercs are killed.</li>
  </ul>

  <h3 class="text-2xl">VSH Commands</h3>
  <ul class="list-disc list-inside">
    <li><code>/vsh</code> - Bring up a VSH menu with options detailing all the important changes made to the gamemode.</li>
    <li><code>/halenext</code> - View your position in the queue based on your current queue points.</li>
  </ul>
</div>
</template>

<style scoped>
h3 {
  padding-top: 1em;
}
</style>
