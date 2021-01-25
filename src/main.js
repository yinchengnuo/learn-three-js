import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'

import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

const funs = {
  length: 0
}

Object.entries(THREE).forEach(([key, val]) => {
  if (typeof val === 'function') {
    funs.length++
    funs[key] = val
  }
})

console.log(funs)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
