import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    meta: { title: '首页' }
  },
  {
    path: '/lesson1',
    name: 'Lesson1',
    redirect: '/lesson1/part1',
    component: () => import('@/views/lesson1'),
    meta: { title: '1、Three.js快速入门—新手上路' },
    children: [
      {
        path: 'part1',
        name: 'Lesson1Part1',
        meta: { title: 'Threejs第一个3D场景' },
        component: () => import('@/views/lesson1/part1')
      },
      {
        path: 'part2',
        name: 'Lesson1Part2',
        meta: { title: '旋转动画、rAF周期性渲染' },
        component: () => import('@/views/lesson1/part2')
      },
      {
        path: 'part3',
        name: 'Lesson1Part3',
        meta: { title: '鼠标操作三维场景旋转缩放' },
        component: () => import('@/views/lesson1/part3')
      },
      {
        path: 'part4',
        name: 'Lesson1Part4',
        meta: { title: '场景插入新的几何体' },
        component: () => import('@/views/lesson1/part4')
      },
      {
        path: 'part5',
        name: 'Lesson1Part5',
        meta: { title: '设置材质效果' },
        component: () => import('@/views/lesson1/part5')
      },
      {
        path: 'part6',
        name: 'Lesson1Part6',
        meta: { title: '设置材质效果' },
        component: () => import('@/views/lesson1/part6')
      },
      {
        path: 'part7',
        name: 'Lesson1Part7',
        meta: { title: '相机' },
        component: () => import('@/views/lesson1/part7')
      }
    ]
  },
  {
    path: '*',
    name: '404',
    meta: { title: '404' },
    component: () => import('@/views/404')
  }
]

const router = new VueRouter({ routes, base: '/three/' })

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
