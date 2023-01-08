<template>
  <button class="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="postcss">
  .button {
    position: relative;
    width: 100px;
    height: 32px;
    padding: 8px 16px;
    border-radius: 8px;
    text-align: center;
    line-height: 16px;
    font-size: 12px;
    border: 1px solid #0035FF;
    color: white;
    background: #0035FF;
    text-decoration: none;
    &:disabled {
      opacity: 0.32;
      cursor: not-allowed;
    }
  }
</style>
