<template>
  <div class="app">
    <el-row>
      <el-col :span="4">
        <el-menu router>
          <menu-item v-for="route in $router.options.routes" :key="route.path" :route="route" />
        </el-menu>
      </el-col>
      <el-col :span="20">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MenuItem from '@/components/MenuItem'

export default {
  components: { MenuItem }
}
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  .el-row {
    width: 100%;
    height: 100%;
    .el-col {
      height: 100%;
      .el-menu {
        height: 100%;
      }
    }
  }
}
</style>
