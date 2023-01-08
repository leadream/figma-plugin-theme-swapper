<template>
  <div class="switcher" :class="{ reversed: isReversed }">
    <div class="mode">
      <SunIcon/>
    </div>
    <div class="arrow" @click="onToggle">
      <ArrowRightIcon/>
    </div>
    <div class="mode dark">
      <MoonIcon/>
    </div>
  </div>
</template>

<script>
import { MoonIcon, ArrowRightIcon, SunIcon } from 'vue-feather-icons'
export default {
  components: {
    MoonIcon,
    ArrowRightIcon,
    SunIcon
  },
  data () {
    return {
      isReversed: false
    }
  },
  methods: {
    onToggle () {
      this.$emit('toggle')
      this.isReversed = !this.isReversed
    }
  }
};
</script>

<style lang="postcss">
  .switcher {
    display: flex;
    align-items: center;
    gap: 8px;
    &.reversed {
      flex-direction: row-reverse;
    }
    .mode {
      width: 40px;
      height: 40px;
      padding: 8px;
      border-radius: 20px;
      color: #333;
      background-color: #EEE;
      &.dark {
        color: #EEE;
        background-color: #333;
      }
    }
    .arrow {
      padding: 4px;
      border-radius: 12px;
      color: #999;
      cursor: pointer;
      transition: background-color 0.24s;
      &:hover {
        background-color: #EEE;
      }
    }
  }
</style>
