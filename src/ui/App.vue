<template>
  <div class="main">
    <Switcher @toggle="reverse"/>
    <Button @click="swap">切换</Button>
  </div>
</template>

<script>
import Button from "./components/Button";
import Switcher from "./components/Switcher";
import './style.css'

import { sendMessageToBackground } from './helper'

export default {
  components: {
    Button,
    Switcher
  },
  data() {
    return {
      targetTheme: 'Dark'
    };
  },
  methods: {
    reverse () {
      if (this.targetTheme==='Dark') {
        this.targetTheme = 'Light'
      } else {
        this.targetTheme = 'Dark'
      }
    },
    swap () {
      sendMessageToBackground('swap-theme', { targetTheme: this.targetTheme })
    }
  }
}
</script>

<style lang="postcss">
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 12px;
  }
</style>
