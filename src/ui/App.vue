<template>
  <div class="main">
    <Welcome />
    <div class="switcher">
      <div class="icon">
        <MoonIcon/>
      </div>
      <div class="icon">
        <SunIcon/>
      </div>
    </div>
  </div>
</template>

<script>
import { MoonIcon, SunIcon } from 'vue-feather-icons'
import Welcome from "./components/Welcome";
import './style.css'

export default {
  data() {
    return {};
  },

  components: {
    Welcome,
    MoonIcon,
    SunIcon
  },

  mounted() {
  }
};
</script>

<style lang="postcss">
  .main {
    .switcher {
      display: flex;
      .icon {
        width: 40px;
        height: 40px;
        padding: 8px;
        border-radius: 20px;
      }
    }
  }
</style>
