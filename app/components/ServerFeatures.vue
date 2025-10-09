<script lang="ts" setup>
</script>

<template>
<div class="mx-auto max-w-4xl outline-dashed outline-2 p-4">
  <h3 class="text-2xl">Damage Based Hale Queue</h3>
  <ul class="list-disc list-inside">
    <li>Deal damage to earn points.</li>
    <li>Dealing at least 1 damage will grant you 5 queue points.</li>
    <li>You'll earn one extra queue point for each damage milestone you hit. (250, 750, 2000)</li>
    <li>Once you become Hale, your queue points will reset.</li>
    <li>Your queue points will stay with you between maps and upon disconnecting.</li>
  </ul>

  <h3 class="text-2xl">Damage Scoreboard</h3>
  <ul class="list-disc list-inside">
    <li>At the end of each round, a damage scoreboard will appear in chat.</li>
    <li>The scoreboard will display the damage of the top 3 most damaging players, the percentage of damage they dealt in relation to Hale's total health, and Hale's remaining health.</li>
    <li>If nobody dealt damage, no scoreboard will appear.</li>
    <li>Your queue points earned during the round will display below the scoreboard.</li>
  </ul>

  <h3 class="text-2xl">Teammate Damage HUD</h3>
  <ul class="list-disc list-inside">
    <li>When in spectator or while dead, you'll receive a HUD element that displays the damage dealt of the teammate you're currently spectating.</li>
    <li>This HUD element will appear right above your damage dealt.</li>
  </ul>

  <h3 class="text-2xl">Teammate Projectile Passthrough</h3>
  <ul class="list-disc list-inside">  
    <li>Rockets, Grenades, Flares, Arrows, Jars, Balls, and Cleaver all pass through teammates.</li>
  </ul>

  <h3 class="text-2xl">Voicemenu Class Notifier</h3>
  <ul class="list-disc list-inside">
    <li>When using voicemenu commands, the (Voice) prefix now displays your class as (Voice Scout).</li>
  </ul>

  <h3 class="text-2xl">Commands</h3>
  <ul class="list-disc list-inside">
    <li><code>!haletoggle</code> - Toggle whether you want to be chosen as Hale. If nobody wants to play Hale, a random player will be selected.</li>
    <li><code>!halenext</code> - View your position in the queue based on your current queue points.</li>
    <li><code>!nominate</code> & <code>!rtv</code> - You decide the maps that you want to play on. Our voting system uses TF2's F1-F5 style vote menu so your number key presses go uninterrupted.</li>
  </ul>

  <h3 class="text-2xl">Map Pool</h3>
  <ul class="list-disc list-inside">
    <li>Our servers run all of the stock VSH maps, as well as custom maps. Custom maps are hosted on the workshop so that our players' download folder won't increase in size every time a map is updated.</li>
    <li>Stock - Tinyrock, Distillery, Skirmish, Nucleus, Outburst, Maul</li>
    <li>Custom - Stowaway (In Alpha) (More coming soon)</li>
  </ul>
</div>
</template>

<style scoped>
h3 {
  padding-top: 1em;
}
</style>
