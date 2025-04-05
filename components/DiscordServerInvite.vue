<script lang="ts" setup>
import '~/assets/css/discord.scss';
</script>

<template>
  <div class="discord-content">
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
</template>

<style scoped lang="scss">
  .discord-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .discord-badge {
    background-color: var(--discord-gray);

    border: solid;
    border-radius: var(--discord-badge-border-radius);
    border-width: var(--discord-badge-border-width);
    border-color: var(--discord-badge-border-gray);

    height: var(--discord-badge-height);
    width: var(--discord-badge-width);
    padding: var(--discord-badge-padding);
    justify-self: center;
  }

  .discord-invite-header {
    color: var(--discord-light-gray);
    font-family: "gg sans";
    font-size: var(--discord-invite-header-font-size);

    line-height: var(--discord-invite-header-line-height);
    margin-bottom: var(--discord-invite-header-margin-bottom);
  }

  .discord-invite-contents {
    display: flex;
    flex: 1;
    flex-direction: column;
    column-gap: var(--discord-invite-contents-column-gap);

    margin-top: var(--discord-invite-contents-margin-vertical);
    margin-right: var(--discord-invite-contents-margin-horizontal);
    margin-bottom: var(--discord-invite-contents-margin-vertical);
    margin-left: var(--discord-invite-contents-margin-horizontal);
  }

  .discord-invite-bottom {
    display: flex;
    flex: 1;
    flex-direction: row;
    column-gap: var(--discord-invite-bottom-column-gap);
    
    height: var(--discord-invite-bottom-height);
    width: fit-content;
    justify-content: space-between;
  }

  .discord-invite-badge-image {
    width: var(--discord-invite-badge-image-width);
    border-radius: var(--discord-invite-badge-image-border-radius);
  }

  .discord-invite-server-info-top {
    display: flex;
    flex: 1;
    flex-direction: column;
    color: var(--discord-light-gray);
    /* justify-content: top; */
    /* Temporary properties until I figure out webhooks */
    justify-content: center;	
  }

  .discord-invite-server-name {
    display: inline;
    font-family: "gg sans", "Noto Sans";
    font-size: var(--discord-invite-server-name-font-size);
    cursor: pointer;
  }

  .discord-invite-server-name:hover {
    text-decoration: underline;
  }

  .discord-invite-member-info {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
  }

  .discord-join-button {
    color: white;
    background-color: rgb(0, 134, 58);

    font-family: "gg sans", "Noto Sans";
    font-size: var(--discord-join-button-font-size);

    border-radius: var(--discord-join-button-border-radius);

    height: var(--discord-join-button-height);
    width: var(--discord-join-button-width);
    
    margin-left: var(--discord-join-button-margin-left);
    align-self: center;
    
    transition: ease-in-out 0.25s;
    cursor: pointer;
  }

  .discord-join-button:hover {
    box-shadow: inset 0px 0px 2rem 0px rgba(0, 0, 0, 0.1);
  }

  @media (width <= $phone-res)
  {
    .discord-badge {
      height: calc(var(--discord-badge-height) * var(--phone-res-mult));
      width: calc(var(--discord-badge-width) * var(--phone-res-mult));
      border-radius: calc(var(--discord-badge-border-radius) * var(--phone-res-mult));
      border-width: calc(var(--discord-badge-border-width) * var(--phone-res-mult));
      padding: calc(var(--discord-badge-padding) * var(--phone-res-mult));
    }

    .discord-invite-header {
      font-size: calc(var(--discord-invite-header-font-size) * var(--phone-res-mult));
      line-height: calc(var(--discord-invite-header-line-height) * var(--phone-res-mult));
      margin-bottom: calc(var(--discord-invite-header-margin-bottom) * var(--phone-res-mult));
    }

    .discord-invite-contents {
      column-gap: calc(var(--discord-invite-contents-column-gap) * var(--phone-res-mult));
      margin-top: calc(var(--discord-invite-contents-margin-vertical) * var(--phone-res-mult));
      margin-right: calc(var(--discord-invite-contents-margin-horizontal) * var(--phone-res-mult));
      margin-bottom: calc(var(--discord-invite-contents-margin-vertical) * var(--phone-res-mult));
      margin-left: calc(var(--discord-invite-contents-margin-horizontal) * var(--phone-res-mult));
    }

    .discord-invite-bottom {
      column-gap: calc(var(--discord-invite-bottom-column-gap) * var(--phone-res-mult));
      height: calc(var(--discord-invite-bottom-height) * var(--phone-res-mult));
    }

    .discord-invite-badge-image {
      width: calc(var(--discord-invite-badge-image-width) * var(--phone-res-mult));
      border-radius: calc(var(--discord-invite-bottom-border-radius) * var(--phone-res-mult));
    }

    .discord-invite-server-name {
      font-size: calc(var(--discord-invite-server-name-font-size) * var(--phone-res-mult));
    }

    .discord-join-button {
      font-size: calc(var(--discord-join-button-font-size) * var(--phone-res-mult));
      height: calc(var(--discord-join-button-height) * var(--phone-res-mult));
      width: calc(var(--discord-join-button-width) * var(--phone-res-mult));
      border-radius: calc(var(--discord-join-button-border-radius) * var(--phone-res-mult));
    }
  }

</style>