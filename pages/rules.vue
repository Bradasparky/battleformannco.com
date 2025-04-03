<script lang="ts" setup>

</script>

<template>
  <div class="rules-page" style="margin-bottom: 100px;">
    <div class="rules-block">
      <h2 class="tf2build rule-header">
        Rules
      </h2>
  
      <div class="rule-container">
        <div>
          <span class="rule-title">General Rules</span>
          <ul class="rule-list">
            <li class="rule-name">Spam</li>
            <ul class="rule-desc">
              <li>Do not repeatedly type out unintelligible gibberish</li>
              <li>Do not repeatedly use binds which flood chat</li>
              <li>Do not repeatedly use the @ command to ping players who you have the attention of</li>
            </ul>
          </ul>
          <ul class="rule-list">
            <li class="rule-name">Exploits</li>
            <ul class="rule-desc">
              <li>Do not exploit commands, gameplay features, or spots on maps</li>
              <li>Exploits which may be unknown to admins should be reported on the discord</li>
            </ul>
          </ul>
          <ul class="rule-list">
            <li class="rule-name">Harassment</li>
            <ul class="rule-desc">
              <li>Do not make unwanted actions towards another player that makes them feel unwelcome, uncomfortable, or annoyed</li>
              <li>The above applies whether it be done by an individual or a group of people</li>
              <li>The above also relates to actions within gameplay that don't relate to the objective such as being told to stop after 
                repeatedly hitting someone with a frying pan</li>
            </ul>
          </ul>
          <ul class="rule-list">
            <li class="rule-name">Hateful Content</li>
            <ul class="rule-desc">
              <li>Do not use hateful language in voice or text chat whether by your own hands, binds, or micspam</li>
              <li>Do not socially engineer people into using hateful language</li>
              <li>Do not try to get around the rules by implying or inserting context in order to give yourself an excuse
                to use hateful language</li>
              <li>Do not spray or equip items which depict hateful user generated content</li>
            </ul>
            <li class="rule-name">Illegal NSFW Content</li>
            <ul class="rule-desc">
              <li style="font-weight: bold">DO NOT</li>
            </ul>
          </ul>
        </div>
  
        <div>
          <span class="rule-title">VSH Gameplay Rules</span>
          <ul class="rule-list">
            <li class="rule-name">Friendlying is not allowed and is defined as:</li>
            <ul class="rule-desc">
              <li>Refusing to participate in the objective</li>
              <li>Refusing to kill other players who aren't participating in the objective</li>
              <li>Refusing to shoot/kill enemy players who are within effective range or dead to rights because they are
                your friend</li>
            </ul>
          </ul>
          <ul class="rule-list">
            <li class="rule-name">Stalling is not allowed and is defined as:</li>
            <ul class="rule-desc">
              <li>Refusing to progress the game</li>
              <li>Dragging out the game without doing the objective, especially when victory is trivial</li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.rules-block {
  margin-top: 50px;
  background-color: var(--tf2-dark);
  border-radius: 8px;
  border-color: var(--tf2-gray);
  border-width: 2px;
  width: 900px;
  padding: 0px 24px 50px 24px;
}

.rule-container {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.rule-header {
  color: var(--tf2-beige);
  margin-bottom: 20px;
  padding-top: 10px;
  font-size: 50px;
}

.rule-list,
.rule-name,
.rule-desc {
  font-family: "Arial";
  color: var(--tf2-beige);
}

.rule-title {
  font-size: 24px;
  font-family: "Arial";
  font-weight: 600;
  color: var(--tf2-beige);
  margin-left: 12px;
}

.rule-list {
  list-style-type: disc;
  margin-left: 32px;
}

.rule-name {
  font-size: 18px;
  margin-top: 12px;
  font-weight: 600;
}

.rule-desc {
  font-size: 17px;
  list-style-type: circle;
  margin-left: 32px;
  font-weight: 500;
}
</style>
