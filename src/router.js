import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout'
import Documents from './views/Documents'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'root',
      component: Layout,
      redirect: '/documents',
      children: [
        {
          path: 'documents',
          name: 'documents',
          component: Documents
        }
      ]
    }
  ]
})
