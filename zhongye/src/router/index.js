import Vue from 'vue'
import Router from 'vue-router'
import Mytabel from '@/components/Mytable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Table',
      component: Mytabel
    }
  ]
})
