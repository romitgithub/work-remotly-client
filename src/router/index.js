import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Companies from '@/components/Companies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    	path: '/companies',
    	name: 'Companies',
    	component: Companies
    }
  ]
})
