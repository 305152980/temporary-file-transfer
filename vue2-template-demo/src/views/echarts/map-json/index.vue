<template>
  <div class="map-json-container">
    <div id="mapCanvas" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import { provinceNameMapOne, provinceNameMapTwo } from '@/constants/map/province-name-map.js'
import * as echarts from 'echarts'
export default {
  name: 'MapJson',
  data() {
    return {
      map: null,
      level: 1
    }
  },
  created() {},
  async mounted() {
    this.map = echarts.init(document.getElementById('mapCanvas'))
    await this.initChinaMap('中国', 'china', [])
    this.mountMapEvent()
  },
  methods: {
    async initChinaMap(title, map, data) {
      this.level = 1
      var option = {
        title: {
          text: `${title}地图`,
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        series: [
          {
            type: 'map',
            map: map,
            label: {
              show: true
            },
            zoom: 1.4,
            top: 145,
            nameMap: provinceNameMapOne,
            data: data
          }
        ]
      }
      const mapJsonData = await import('@/constants/map/' + map + '.json')
      echarts.registerMap(map, mapJsonData)
      this.map.setOption(option, { replaceMerge: ['series'] })
    },
    async initProvinceMap(title, map, data) {
      this.level = 2
      const option = {
        title: {
          text: `${title}地图`,
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        series: [
          {
            type: 'map',
            map: map,
            label: {
              show: true
            },
            data: data
          }
        ]
      }
      const mapJsonData = await import('@/constants/map/province/' + map + '.json')
      echarts.registerMap(map, mapJsonData)
      this.map.setOption(option, { replaceMerge: ['series'] })
    },
    mountMapEvent() {
      this.map.on('click', async params => {
        if (this.level === 1) {
          this.initProvinceMap(params.name, provinceNameMapTwo[params.name], [])
        }
      })
      this.map.getZr().on('click', params => {
        if (!params.target && this.level === 2) {
          this.initChinaMap('中国', 'china', [])
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map-json-container {
  height: 100%;
}
</style>
