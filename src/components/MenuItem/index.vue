<template>
  <div class="menu-item">
    <el-submenu v-if="route.children" :index="route.path">
      <template #title>{{ route.meta.title }}</template>
      <menu-item v-for="route_ in route.children" :key="route_.path" :index="`${route.path}/${route_.path}`" :route="route_">{{ route_.meta.title }}</menu-item>
    </el-submenu>
    <el-menu-item v-else :index="route.path" :route="route">{{ route.meta.title }}</el-menu-item>
  </div>
</template>

<script>
import path from 'path'

export default {
  name: 'MenuItem',
  props: {
    // path: {
    //   type: String,
    //   required: true
    // },
    route: {
      type: Object,
      required: true
    }
  },
  methods: {
    resolvePath(routePath) {
      console.log(this.path, routePath)
      return path.resolve(this.path, routePath)
    }
  }
}
</script>

<style>

</style>
