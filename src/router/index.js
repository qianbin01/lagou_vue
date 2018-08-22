import Vue from 'vue'
import Router from 'vue-router'

const index = r => require.ensure([], () => r(require('../views/index')), 'index');

Vue.use(Router);

export default new Router({
  routes: [
    {path: '/', name: 'index', component: index, meta: {title: '首页'}},
  ]
})
