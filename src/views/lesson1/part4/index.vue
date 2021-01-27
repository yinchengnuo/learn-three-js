<template>
  <div ref="wrapper" class="index">
    <!--  -->
  </div>
</template>

<script>
import '@/assets/js/controls/OrbitControls.js'

export default {
  mounted() {
    /**
     * 创建场景对象Scene
     */
    var scene = new THREE.Scene()
    console.log(scene)
    /**
     * 创建网格模型
     */

    var geometry = new THREE.BoxGeometry(100, 100, 100) // 长方体
    console.log(geometry)

    var geometry1 = new THREE.BoxGeometry(100, 100, 100) // 长方体
    var geometry2 = new THREE.SphereGeometry(60, 40, 40) // 球体
    var geometry3 = new THREE.CylinderGeometry(50, 50, 100) // 圆柱
    var geometry4 = new THREE.OctahedronGeometry(50) // 正八面体
    var geometry5 = new THREE.DodecahedronGeometry(50) // 正十二面体
    var geometry6 = new THREE.IcosahedronGeometry(100) // 正二十面体

    var material = new THREE.MeshLambertMaterial({ color: 0xcccccc }) // 材质对象Material

    var mesh = new THREE.Mesh(geometry, material) // 网格模型对象Mesh
    console.log(mesh)
    var mesh1 = new THREE.Mesh(geometry1, material) // 网格模型对象Mesh
    var mesh2 = new THREE.Mesh(geometry2, material) // 网格模型对象Mesh
    var mesh3 = new THREE.Mesh(geometry3, material) // 网格模型对象Mesh
    var mesh4 = new THREE.Mesh(geometry4, material) // 网格模型对象Mesh
    var mesh5 = new THREE.Mesh(geometry5, material) // 网格模型对象Mesh
    var mesh6 = new THREE.Mesh(geometry6, material) // 网格模型对象Mesh

    scene.add(mesh1) // 网格模型添加到场景中
    scene.add(mesh2) // 网格模型添加到场景中
    scene.add(mesh3) // 网格模型添加到场景中
    scene.add(mesh4) // 网格模型添加到场景中
    scene.add(mesh5) // 网格模型添加到场景中
    scene.add(mesh6) // 网格模型添加到场景中

    /**
     * 光源设置
     */
    // 点光源
    var point = new THREE.PointLight(0xeeeeee)
    point.position.set(400, 200, 300) // 点光源位置
    scene.add(point) // 点光源添加到场景中

    // 环境光
    var ambient = new THREE.AmbientLight(0xffffff)
    scene.add(ambient)

    /**
     * 相机设置
     */
    var width = this.$refs.wrapper.offsetWidth // 窗口宽度
    var height = this.$refs.wrapper.offsetHeight // 窗口高度
    var k = width / height // 窗口宽高比
    var s = 200 // 三维场景显示范围控制系数，系数越大，显示的范围越大
    // 创建相机对象
    var camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
    // camera.position.set(200, 300, 200) // 设置相机位置
    camera.position.set(200, 200, 200) // 设置相机位置
    camera.lookAt(scene.position) // 设置相机方向(指向的场景对象)

    /**
     * 创建渲染器对象
     */
    var renderer = new THREE.WebGLRenderer()
    renderer.setSize(width, height)// 设置渲染区域尺寸
    renderer.setClearColor(0xb9d3ff, 1) // 设置背景颜色

    this.$refs.wrapper.appendChild(renderer.domElement) // body元素中插入canvas对象
    // 执行渲染操作   指定场景、相机作为参数
    // renderer.render(scene, camera)

    function render() {
      renderer.render(scene, camera) // 执行渲染操作
    }

    render()

    var controls = new THREE.OrbitControls(camera, renderer.domElement) // 创建控件对象
    controls.addEventListener('change', render) // 监听鼠标、键盘事件
  }
}
</script>

<style lang="scss" scoped>
  .index {
    height: 100%;
  }
</style>
