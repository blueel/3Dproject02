import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import zonglan from '../components/zonglan.vue'
import shebei from '../components/shebei.vue'
import quyu from '../components/quyu.vue'
import jiexiantu from '../components/jiexiantu.vue'
import xitong from '../components/xitong.vue'
import jinggaofenxi from '../components/jinggaofenxi.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/zonglan',
    name: 'zonglan',
    component: zonglan
  },
  {
    path: '/xitong',
    name: 'xitong',
    component: xitong
  }, {
    path: '/shebei',
    name: 'shebei',
    component: shebei
  }, {
    path: '/quyu',
    name: 'quyu',
    component: quyu
  }, {
    path: '/jiexiantu',
    name: 'jiexiantu',
    component: jiexiantu
  },
  {
    path: '/jinggaofenxi',
    name: 'jinggaofenxi',
    component: jinggaofenxi
  }
]

const router = new VueRouter({
  routes
})

export default router
