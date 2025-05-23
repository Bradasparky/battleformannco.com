<script lang="ts" setup>
import '~/assets/css/rules.scss';
</script>

<template>
  <div class="rules-page">
    <h2 class="tf2build secondary rule-header">
        Server Rules
    </h2>
    <div class="rules-block">
      <div class="rules-content">
        <section>
          <ul>
            <li class="rule-name">Spam</li>
            <ul>
              <li>Do not repeatedly type out unintelligible gibberish</li>
              <li>Do not repeatedly use binds which flood chat</li>
              <li>Do not repeatedly use the @ command to ping players who you already have the attention of</li>
            </ul>
          </ul>
          <ul>
            <li class="rule-name">Exploits</li>
            <ul>
              <li>Do not exploit commands, gameplay features, or spots on maps</li>
              <li>Exploits which may be unknown to admins should be reported on the discord</li>
            </ul>
          </ul>
          <ul>
            <li class="rule-name">Harassment</li>
            <ul>
              <li>Do not make unwanted actions towards another player that makes them feel unwelcome, uncomfortable, or
                annoyed</li>
              <li>The above applies whether it be done by an individual or a group of people</li>
              <li>The above also relates to actions within gameplay that don't relate to the objective such as being
                told to stop after
                repeatedly hitting someone with a frying pan</li>
            </ul>
          </ul>
          <ul>
            <li class="rule-name">Hateful Content</li>
            <ul>
              <li>Do not use hateful language in voice or text chat whether by your own hands, binds, or micspam</li>
              <li>Do not socially engineer people into using hateful language</li>
              <li>Do not try to get around the rules by implying or inserting context in order to give yourself an
                excuse to use hateful language</li>
              <li>Do not spray or equip items which depict hateful user generated content</li>
            </ul>
            <li class="rule-name">Illegal NSFW Content</li>
            <ul>
              <li style="font-weight: bold">DO NOT</li>
            </ul>
          </ul>
        </section>

        <section>
          <h2 class="tf2build rule-header">VSH Gameplay Rules</h2>
          <ul>
            <li class="rule-name">Friendlying is not allowed and is defined as:</li>
            <ul>
              <li>Refusing to participate in the objective</li>
              <li>Refusing to kill other players who aren't participating in the objective</li>
              <li>Refusing to shoot/kill enemy players who are within effective range or dead to rights because they are
                your friend</li>
            </ul>
          </ul>
          <ul>
            <li class="rule-name">Stalling is not allowed and is defined as:</li>
            <ul>
              <li>Refusing to progress the game</li>
              <li>Dragging out the game without doing the objective, especially when victory is trivial</li>
            </ul>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.rules-page {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center; /* Keeps as much text as possible on screen */
  word-break: break-word;
}

.rules-block {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  font-family: "Arial";
  color: var(--tf2-beige);
  background-color: var(--tf2-dark);

  border: dashed;
  border-color: var(--tf2-gray);
  border-width: var(--rules-block-border-width);
  border-radius: var(--rules-block-border-radius);

  max-width: var(--rules-block-max-width);

  padding-top: var(--rules-block-padding-top);
  padding-right: var(--rules-block-padding-right);
  padding-bottom: var(--rules-block-padding-bottom);
  padding-left: var(--rules-block-padding-left);
}

.rule-header {
  color: var(--tf2-beige);
  margin-top: var(--rule-header-margin-top);
  margin-right: var(--rule-header-margin-right);
  margin-bottom: var(--rule-header-margin-bottom);
  margin-left: var(--rule-header-margin-left);
}

.rules-content {
  display: flex;
  flex-direction: column;
  row-gap: var(--rules-content-row-gap);
}

div.rules-content span {
  font-size: var(--rule-title-font-size);
  font-weight: 600;
  color: var(--tf2-beige);
  margin-left: var(--rule-title-margin-left);
}

.rule-name {
  list-style-type: disc;
  font-size: var(--rule-name-font-size);
  font-weight: 600;
  margin-top: var(--rule-name-margin-top);
}

li.rule-name ~ ul {
  list-style-type: circle;
  font-size: var(--rule-desc-font-size);
  font-weight: 500;
  margin-left: var(--rule-desc-margin-left);
}

@media (width <= $phone-res)
{
  .rules-block {
    border-width: calc(var(--rules-block-border-width) * var(--phone-res-mult));
    border-radius: calc(var(--rules-block-border-radius) * var(--phone-res-mult));
    max-width: calc(var(--rules-block-max-width) * var(--phone-res-mult));

    padding-top: calc(var(--rules-block-padding-top) * var(--phone-res-mult));
    padding-right: calc(var(--rules-block-padding-right) * var(--phone-res-mult));
    padding-bottom: calc(var(--rules-block-padding-bottom) * var(--phone-res-mult));
    padding-left: calc(var(--rules-block-padding-left) * var(--phone-res-mult));
  }

  .rule-header {
    font-size: calc(var(--h2-font-size) * var(--phone-res-mult) * 0.8);
    margin-top: calc(var(--rule-header-margin-top) * var(--phone-res-mult));
    margin-right: calc(var(--rule-header-margin-right) * var(--phone-res-mult));
    margin-bottom: calc(var(--rule-header-margin-bottom) * var(--phone-res-mult));
    margin-left: calc(var(--rule-header-margin-left) * var(--phone-res-mult));
  }

  div.rules-content span {
    font-size: calc(var(--rule-title-font-size) * var(--phone-res-mult));
    margin-left: calc(var(--rule-title-margin-left) * var(--phone-res-mult));
  }

  .rules-content {
    row-gap: calc(var(--rules-content-row-gap) * var(--phone-res-mult));
  }

  .rule-name {
    font-size: calc(var(--rule-name-font-size) * var(--phone-res-mult));
    margin-top: calc(var(--rule-name-margin-top) * var(--phone-res-mult));
  }

  li.rule-name ~ ul {
    font-size: calc(var(--rule-desc-font-size) * var(--phone-res-mult));
    margin-left: calc(var(--rule-desc-margin-left) * var(--phone-res-mult));
  }
}
</style>
