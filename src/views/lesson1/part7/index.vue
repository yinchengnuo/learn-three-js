<template>
  <div ref="wrap" class="index">
    <!--  -->
  </div>
</template>

<script>
import '@/assets/js/controls/OrbitControls.js'

export default {
  mounted() {
    const wrap = this.$refs.wrap
    const width = wrap.offsetWidth
    const height = wrap.offsetHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000)

    const geometry = new THREE.BoxGeometry(300, 200, 100) // 立方体
    const material = new THREE.MeshBasicMaterial({ color: 0xaaaaaa }) // 材质
    const mesh = new THREE.Mesh(geometry, material) // 合并物体和材质
    scene.add(mesh)

    camera.position.x = 0
    camera.position.y = 0
    camera.position.z = 200
    // camera.position.x = 50
    // camera.position.z = 456

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)
    renderer.setClearColor(0xb9d3ff, 1)
    wrap.appendChild(renderer.domElement)

    const render = () => renderer.render(scene, camera)

    render()

    ;(new THREE.OrbitControls(camera, renderer.domElement)).addEventListener('change', render)

    // function animate() {
    //   requestAnimationFrame(animate)
    //   renderer.render(scene, camera)
    // }

    // renderer.setSize(width, height)
    // wrap.appendChild(renderer.domElement)
    // animate()
  }
}
</script>

<style lang="scss" scoped>
  .index {
    height: 100%;
  }
</style>
