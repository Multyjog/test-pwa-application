import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout'
import Welcome from './views/WelcomeScreen'
import Documents from './views/Documents'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/documents',
      component: Layout,
      children: [
        {
          name: 'documents',
          path: '/',
          component: Documents
        }
      ]
    },
    {
      path: '/',
      name: 'welcome',
      component: Welcome,
    }
  ]
})
