import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/components/homepage'
import buttons from '@/components/buttons'
import test from '@/components/test'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage,
      meta:{
        // 页面标题title
        title: '首页'
    }
    },
    {
      path: '/components/buttons',
      name: 'buttons',
      component: buttons,
      meta:{
        // 页面标题title
        title: '按钮'
    }
    },
    {
      path: '/components/test',
      name: 'test',
      component: test,
      meta:{
        // 页面标题title
        title: '测试'
    }
    }
  ]
})
