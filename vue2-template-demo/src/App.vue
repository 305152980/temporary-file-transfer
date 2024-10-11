<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    window.addEventListener('resize', this.windowSizeChange)
  },
  beforeDestroy() {
    this.$bus.$off('windowSizeChange')
  },
  methods: {
    windowSizeChange() {
      this.$bus.$emit('windowSizeChange')
    }
  }
}
</script>

<style lang="scss"></style>
