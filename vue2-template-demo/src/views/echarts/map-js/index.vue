<template>
  <div class="map-js-container">
    <div id="mapCanvas" style="width: 100%; height: 100%"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import '@/plugins/map/world.js'
import '@/plugins/map/china.js'
export default {
  name: 'MapJs',
  data() {
    return {
      worldMap: null,
      chinaMap: null
    }
  },
  created() {},
  mounted() {
    this.initWorldMap()
  },
  methods: {
    initWorldMap() {
      var option = {
        title: {
          text: '世界疫情图',
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
            { min: 10000, max: 99999999, label: '大于等于 99999 人', color: '#372a28' },
            { min: 1000, max: 9999, label: '确诊 1000-9999 人', color: '#4e160f' },
            { min: 100, max: 999, label: '确诊 100-999 人', color: '#974236' },
            { min: 10, max: 99, label: '确诊 10-99 人', color: '#ee7263' },
            { min: 1, max: 9, label: '确诊 1-9 人', color: '#f5bba7' }
          ]
        },
        series: [
          {
            name: '确诊数',
            type: 'map',
            map: 'world',
            nameMap: {
              Somalia: '索马里',
              Liechtenstein: '列支敦士登',
              Morocco: '摩洛哥',
              'W. Sahara': '西撒哈拉',
              Serbia: '塞尔维亚',
              Afghanistan: '阿富汗',
              Angola: '安哥拉',
              Albania: '阿尔巴尼亚',
              Aland: '奥兰群岛',
              Andorra: '安道尔',
              'United Arab Emirates': '阿拉伯联合酋长国',
              Argentina: '阿根廷',
              Armenia: '亚美尼亚',
              'American Samoa': '（美属）萨摩亚',
              'Fr. S. Antarctic Lands': '（法属）南部领地',
              'Antigua and Barb.': '安提瓜和巴布达',
              Australia: '澳大利亚',
              Austria: '奥地利',
              Azerbaijan: '阿塞拜疆',
              Burundi: '布隆迪',
              Belgium: '比利时',
              Benin: '贝宁',
              'Burkina Faso': '布基纳法索',
              Bangladesh: '孟加拉',
              Bulgaria: '保加利亚',
              Bahrain: '巴林',
              Bahamas: '巴哈马',
              'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
              Belarus: '白俄罗斯',
              Belize: '伯利兹',
              Bermuda: '百慕大',
              Bolivia: '玻利维亚',
              Brazil: '巴西',
              Barbados: '巴巴多斯',
              Brunei: '文莱',
              Bhutan: '不丹',
              Botswana: '博茨瓦纳',
              'Central African Rep.': '中非',
              Canada: '加拿大',
              Switzerland: '瑞士',
              Chile: '智利',
              China: '中国',
              "Côte d'Ivoire": '科特迪瓦',
              Cameroon: '喀麦隆',
              'Dem. Rep. Congo': '刚果（金）',
              Congo: '刚果',
              Colombia: '哥伦比亚',
              Comoros: '科摩罗',
              'Cape Verde': '佛得角',
              'Costa Rica': '哥斯达黎加',
              Cuba: '古巴',
              Curaçao: '库拉索',
              'Cayman Is.': '（英属）开曼群岛',
              'N. Cyprus': '北塞浦路斯',
              Cyprus: '塞浦路斯',
              'Czech Rep.': '捷克',
              Germany: '德国',
              Djibouti: '吉布提',
              Dominica: '多米尼加',
              Denmark: '丹麦',
              'Dominican Rep.': '多米尼加',
              Algeria: '阿尔及利亚',
              Ecuador: '厄瓜多尔',
              Egypt: '埃及',
              Eritrea: '厄立特里亚',
              Spain: '西班牙',
              Estonia: '爱沙尼亚',
              Ethiopia: '埃塞俄比亚',
              Finland: '芬兰',
              Fiji: '斐济',
              'Falkland Is.': '福克兰群岛',
              France: '法国',
              'Faeroe Is.': '法罗群岛',
              Micronesia: '密克罗尼西亚',
              Gabon: '加蓬',
              'United Kingdom': '英国',
              Georgia: '格鲁吉亚',
              Ghana: '加纳',
              Guinea: '几内亚',
              Gambia: '冈比亚',
              'Guinea-Bissau': '几内亚比绍',
              'Eq. Guinea': '赤道几内亚',
              Greece: '希腊',
              Grenada: '格林纳达',
              Greenland: '格陵兰岛',
              Guatemala: '危地马拉',
              Guam: '关岛',
              Guyana: '圭亚那',
              'Heard I. and McDonald Is.': '赫德岛和麦克唐纳群岛',
              Honduras: '洪都拉斯',
              Croatia: '克罗地亚',
              Haiti: '海地',
              Hungary: '匈牙利',
              Indonesia: '印度尼西亚',
              'Isle of Man': '马恩岛',
              India: '印度',
              'Br. Indian Ocean Ter.': '（英属）印度洋领土',
              Ireland: '爱尔兰',
              Iran: '伊朗',
              Iraq: '伊拉克',
              Iceland: '冰岛',
              Israel: '以色列',
              Italy: '意大利',
              Jamaica: '牙买加',
              Jersey: '泽西岛',
              Jordan: '约旦',
              Japan: '日本',
              'Siachen Glacier': '锡亚琴冰川',
              Kazakhstan: '哈萨克斯坦',
              Kenya: 'Kenya',
              Kyrgyzstan: '吉尔吉斯斯坦',
              Cambodia: '柬埔寨',
              Kiribati: '基里巴斯',
              Korea: '韩国',
              Kuwait: '科威特',
              'Lao PDR': '老挝',
              Lebanon: '黎巴嫩',
              Liberia: '利比里亚',
              Libya: '利比亚',
              'Saint Lucia': '圣卢西亚',
              'Sri Lanka': '斯里兰卡',
              Lesotho: '莱索托',
              Lithuania: '立陶宛',
              Luxembourg: '卢森堡',
              Latvia: '拉脱维亚',
              Moldova: '摩尔多瓦',
              Madagascar: '马达加斯加',
              Mexico: '墨西哥',
              Macedonia: '马其顿',
              Mali: '马里',
              Malta: '马耳他',
              Myanmar: '缅甸',
              Montenegro: '黑山',
              Mongolia: '蒙古',
              'N. Mariana Is.': '北马里亚纳群岛',
              Mozambique: '莫桑比克',
              Mauritania: '毛里塔尼亚',
              Montserrat: '蒙特塞拉特',
              Mauritius: '毛里求斯',
              Malawi: '马拉维',
              Malaysia: '马来西亚',
              Namibia: '纳米比亚',
              'New Caledonia': '新喀里多尼亚',
              Niger: '尼日尔',
              Nigeria: '尼日利亚',
              Nicaragua: '尼加拉瓜',
              Niue: '纽埃',
              Netherlands: '荷兰',
              Norway: '挪威',
              Nepal: '尼泊尔',
              'New Zealand': '新西兰',
              Oman: '阿曼',
              Pakistan: '巴基斯坦',
              Panama: '巴拿马',
              Peru: '秘鲁',
              Philippines: '菲律宾',
              Palau: '帕劳',
              'Papua New Guinea': '巴布亚新几内亚',
              Poland: '波兰',
              'Puerto Rico': '波多黎各',
              'Dem. Rep. Korea': '朝鲜',
              Portugal: '葡萄牙',
              Paraguay: '巴拉圭',
              Palestine: '巴勒斯坦',
              'Fr. Polynesia': '（法属）波利尼西亚',
              Qatar: '卡塔尔',
              Romania: '罗马尼亚',
              Russia: '俄罗斯',
              Rwanda: '卢旺达',
              'Saudi Arabia': '沙特阿拉伯',
              Sudan: '苏丹',
              'S. Sudan': '南苏丹',
              Senegal: '塞内加尔',
              Singapore: '新加坡',
              'S. Geo. and S. Sandw. Is.': '（法属）波利尼西亚',
              'Saint Helena': '圣赫勒拿岛',
              'Solomon Is.': '所罗门群岛',
              'Sierra Leone': '塞拉利昂',
              'El Salvador': '萨尔瓦多',
              'St. Pierre and Miquelon': '圣皮埃尔岛和密克隆岛',
              'São Tomé and Principe': '圣多美和普林西比',
              Suriname: '苏里南',
              Slovakia: '斯洛伐克',
              Slovenia: '斯洛文尼亚',
              Sweden: '瑞典',
              Swaziland: '斯威士兰',
              Seychelles: '塞舌尔',
              Syria: '叙利亚',
              'Turks and Caicos Is.': '特克斯和凯科斯群岛',
              Chad: '乍得',
              Togo: '多哥',
              Thailand: '泰国',
              Tajikistan: '塔吉克斯坦',
              Turkmenistan: '土库曼斯坦',
              'Timor-Leste': '东帝汶',
              Tonga: '汤加',
              'Trinidad and Tobago': '特立尼达和多巴哥',
              Tunisia: '突尼斯',
              Turkey: '土耳其',
              Tanzania: '坦桑尼亚',
              Uganda: '乌干达',
              Ukraine: '乌克兰',
              Uruguay: '乌拉圭',
              'United States': '美国',
              Uzbekistan: '乌兹别克斯坦',
              'St. Vin. and Gren.': '圣文森特和格林纳丁斯',
              Venezuela: '委内瑞拉',
              'U.S. Virgin Is.': '（美属）维尔京群岛',
              Vietnam: '越南',
              Vanuatu: '瓦努阿图',
              Samoa: '萨摩亚',
              Yemen: '也门',
              'South Africa': '南非',
              Zambia: '赞比亚',
              Zimbabwe: '津巴布韦',
              'N. Kashmir': '（巴控）克什米尔',
              'S. Kashmir': '（印控）克什米尔'
            },
            data: [
              { name: '中国', value: 17252 },
              { name: '日本', value: 20 },
              { name: '泰国', value: 19 },
              { name: '新加坡', value: 18 },
              { name: '韩国', value: 15 },
              { name: '澳大利亚', value: 12 },
              { name: '美国', value: 11 },
              { name: '德国', value: 10 },
              { name: '马来西亚', value: 8 },
              { name: '越南', value: 7 },
              { name: '法国', value: 6 },
              { name: '阿拉伯联合酋长国', value: 5 },
              { name: '加拿大', value: 4 },
              { name: '印度', value: 3 },
              { name: '菲律宾', value: 2 },
              { name: '意大利', value: 2 },
              { name: '英国', value: 2 },
              { name: '俄罗斯', value: 2 },
              { name: '尼泊尔', value: 1 },
              { name: '斯里兰卡', value: 1 },
              { name: '芬兰', value: 1 },
              { name: '瑞典', value: 1 },
              { name: '柬埔寨', value: 1 }
            ]
          }
        ]
      }

      this.worldMap = echarts.init(document.getElementById('mapCanvas'))
      this.worldMap.setOption(option)

      this.worldMap.on('click', params => {
        if (params.name === '中国') {
          this.worldMap.dispose()
          this.worldMap = null
          this.$nextTick(() => {
            this.initChinaMap()
          })
        }
      })
    },
    initChinaMap() {
      var option = {
        title: {
          text: '中国疫情图',
          x: 'center',
          textStyle: {
            fontSize: 24
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          type: 'piecewise',
          pieces: [
            { min: 10000, max: 99999999, label: '大于等于 99999 人', color: '#372a28' },
            { min: 1000, max: 9999, label: '确诊 1000-9999 人', color: '#4e160f' },
            { min: 100, max: 999, label: '确诊 100-999 人', color: '#974236' },
            { min: 10, max: 99, label: '确诊 10-99 人', color: '#ee7263' },
            { min: 1, max: 9, label: '确诊 1-9 人', color: '#f5bba7' }
          ]
        },
        series: [
          {
            name: '确诊数',
            type: 'map',
            map: 'china',
            label: {
              show: true
            },
            data: [
              {
                name: '北京',
                value: 212
              },
              {
                name: '天津',
                value: 60
              },
              {
                name: '上海',
                value: 208
              },
              {
                name: '重庆',
                value: 337
              },
              {
                name: '河北',
                value: 126
              },
              {
                name: '河南',
                value: 675
              },
              {
                name: '云南',
                value: 117
              },
              {
                name: '辽宁',
                value: 74
              },
              {
                name: '黑龙江',
                value: 155
              },
              {
                name: '湖南',
                value: 593
              },
              {
                name: '安徽',
                value: 480
              },
              {
                name: '山东',
                value: 270
              },
              {
                name: '新疆',
                value: 29
              },
              {
                name: '江苏',
                value: 308
              },
              {
                name: '浙江',
                value: 829
              },
              {
                name: '江西',
                value: 476
              },
              {
                name: '湖北',
                value: 13522
              },
              {
                name: '广西',
                value: 139
              },
              {
                name: '甘肃',
                value: 55
              },
              {
                name: '山西',
                value: 74
              },
              {
                name: '内蒙古',
                value: 34
              },
              {
                name: '陕西',
                value: 142
              },
              {
                name: '吉林',
                value: 42
              },
              {
                name: '福建',
                value: 179
              },
              {
                name: '贵州',
                value: 56
              },
              {
                name: '广东',
                value: 797
              },
              {
                name: '青海',
                value: 15
              },
              {
                name: '西藏',
                value: 1
              },
              {
                name: '四川',
                value: 282
              },
              {
                name: '宁夏',
                value: 34
              },
              {
                name: '海南',
                value: 79
              },
              {
                name: '台湾',
                value: 10
              },
              {
                name: '香港',
                value: 15
              },
              {
                name: '澳门',
                value: 9
              },
              {
                name: '南海诸岛',
                value: 0
              }
            ]
          }
        ]
      }

      this.chinaMap = echarts.init(document.getElementById('mapCanvas'))
      this.chinaMap.setOption(option)

      this.chinaMap.on('click', params => {})

      this.chinaMap.getZr().on('click', params => {
        if (params.target) return
        this.chinaMap.dispose()
        this.chinaMap = null
        this.$nextTick(() => {
          this.initWorldMap()
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.map-js-container {
  height: 100%;
}
</style>
