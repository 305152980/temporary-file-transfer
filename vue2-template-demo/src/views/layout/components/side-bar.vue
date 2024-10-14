<template>
  <div class="side-bar-container">
    <div class="side-bar-header">侧边菜单栏</div>
    <el-menu router :default-active="defaultActive" background-color="#d3dce6">
      <!-- 一级菜单。 -->
      <template v-for="(item_1, index_1) in sidebarMenuTree">
        <el-menu-item v-if="item_1.address" :key="`${index_1}key`" :index="item_1.address">
          <template slot="title">
            <i :class="item_1.icon"></i>
            <span>{{ item_1.title }}</span>
          </template>
        </el-menu-item>
        <el-submenu v-else :key="`${index_1}key`" :index="`${item_1.level}-${index_1}`">
          <template slot="title">
            <i :class="item_1.icon"></i>
            <span>{{ item_1.title }}</span>
          </template>
          <!-- 二级菜单。 -->
          <template v-for="(item_2, index_2) in item_1.children">
            <el-menu-item v-if="item_2.address" :key="`${index_2}key`" :index="item_2.address">
              {{ item_2.title }}
            </el-menu-item>
            <el-submenu v-else :key="`${index_2}key`" :index="`${item_2.level}-${index_2}`">
              <template slot="title">{{ item_2.title }}</template>
              <!-- 三级菜单。 -->
              <template v-for="(item_3, index_3) in item_2.children">
                <el-menu-item :key="`${index_3}key`" :index="item_3.address">
                  {{ item_3.title }}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
  data() {
    return {
      defaultActive: '',
      sidebarMenuTree: [
        {
          icon: 'el-icon-user', // 只有一级菜单有 icon 属性。
          title: 'devIng',
          address: '', // address 为空，代表为目录；address 非空，代表为页面。
          level: '1',
          children: [
            {
              title: 'demoOne',
              address: '/demoOne',
              level: '2',
              children: []
            }
          ]
        },
        {
          icon: 'el-icon-picture-outline',
          title: 'echarts',
          address: '',
          level: '1',
          children: [
            {
              title: '地图.js',
              address: '/mapJs',
              level: '2',
              children: []
            },
            {
              title: '地图.json',
              address: '/mapJson',
              level: '2',
              children: []
            }
          ]
        },
        {
          icon: 'el-icon-folder-opened',
          title: '文件上传下载',
          address: '',
          level: '1',
          children: [
            {
              title: '文件上传',
              address: '/fileUpload',
              level: '2',
              children: []
            }
          ]
        }
      ]
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        this.defaultActive = to.fullPath
      },
      immediate: true
    }
  },
  created() {},
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.side-bar-container {
  height: 100%;
  .side-bar-header {
    height: 60px;
    font-size: 28px;
    font-weight: 700;
    line-height: 60px;
    text-align: center;
  }
  .el-menu {
    height: calc(100% - 80px);
    margin-bottom: 20px;
    border-right: none;
    overflow-y: auto;
  }
}
</style>
