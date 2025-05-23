<script lang="ts" setup>
import '~/assets/css/rules.scss';
</script>

<template>
    <div class="feature-block">
      <div class="feature-content">
        <section>
          <ul>
            <li class="feature-name">Damage Based Hale Queue</li>
            <ul>
              <li>Deal damage to earn points.</li>
              <li>Dealing at least 1 damage will grant you 5 queue points.</li>
              <li>You'll earn one extra queue point for each damage milestone you hit (250, 750, 2000).</li>
              <li>Once you become Hale, your queue points will reset.</li>
              <li>Your queue points will stay with you between maps and upon disconnecting.</li>
            </ul>
          </ul>
          <ul>
            <li class="feature-name">Damage Scoreboard</li>
            <ul>
              <li>At the end of each round, a damage scoreboard will appear in chat.</li>
              <li>The scoreboard will display the damage of the top 3 most damaging players, the percentage of damage they dealt in relation to Hale's total health, and Hale's remaining health.</li>
              <li>If nobody dealt damage, no scoreboard will appear.</li>
              <li>Your queue points earned during the round will display below the scoreboard.</li>
            </ul>
          </ul>
          <ul>
            <li class="feature-name">Teammate Damage Hud</li>
            <ul>
              <li>When in spectator or while dead, you'll receive a hud element that displays the damage dealt of the teammate you're currently spectating.</li>
              <li>This hud element will appear right above your damage dealt.</li>
            </ul>
          </ul>
          <ul>
            <li class="feature-name">Commands</li>
            <ul>
              <li>!haletoggle - Toggle whether you want to be chosen as Hale. If nobody wants to play Hale, a random player will be selected.</li>
              <li>!halenext - View your position in the queue based on your current queue points.</li>
              <li>!nominate & !rtv - You decide the maps that you want to play on. Our voting system uses TF2's F1-F5 style vote menu so your number key presses go uninterrupted.</li>
            </ul>
          </ul>
          <ul>
            <li class="feature-name">Map Pool</li>
            <ul>
              <li>Our servers run all of the stock VSH maps, as well as custom maps. Custom maps are hosted on the workshop so that our players' download folder won't increase in size every time a map is updated.</li>
              <li>Stock - Tinyrock, Distillery, Skirmish, Nucleus, Outburst, Maul</li>
              <li>Custom - Karijini, Outlook, Expedition</li>
            </ul>
          </ul>
        </section>
      </div>
    </div>
</template>

<style scoped lang="scss">
.feature-block {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center; /* Keeps as much text as possible on screen */

  word-break: break-word;
}

.feature-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  font-family: "Arial";
  color: var(--tf2-beige);
  background-color: var(--tf2-dark);

  border-color: var(--tf2-gray);
  border-width: var(--rules-block-border-width);
  border-radius: var(--rules-block-border-radius);
  border-style: dashed;

  max-width: var(--rules-block-max-width);

  padding-top: var(--rules-block-padding-top);
  padding-right: var(--rules-block-padding-right);
  padding-bottom: 2em;
  padding-left: var(--rules-block-padding-left);
}

.feature-name {
  list-style-type: disc;
  font-size: var(--rule-name-font-size);
  font-weight: 600;
  margin-top: var(--rule-name-margin-top);
}

li.feature-name ~ ul {
  list-style-type: circle;
  font-size: var(--rule-desc-font-size);
  font-weight: 500;
  margin-left: var(--rule-desc-margin-left);
}

</style>