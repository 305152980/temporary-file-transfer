<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<script>
// import DevicePixelRatio from '@/utils/device-pixel-ratio.js'
export default {
  name: 'App',
  created() {
    // new DevicePixelRatio().init()
  },
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
