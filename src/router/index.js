import Vue from 'vue'
import Router from 'vue-router'

const welcome = r => require.ensure([], () => r(require('../views/welcome')), 'welcome');
const register = r => require.ensure([], () => r(require('../views/register')), 'register');
const baseIndex = r => require.ensure([], () => r(require('../views/baseIndex')), 'baseIndex');

const home = r => require.ensure([], () => r(require('../views/home/home')), 'home');
const chooseLocation = r => require.ensure([], () => r(require('../views/home/chooseLocation')), 'chooseLocation');
const newsList = r => require.ensure([], () => r(require('../views/home/newsList')), 'newsList');
const newsDetail = r => require.ensure([], () => r(require('../views/home/newsDetail')), 'newsDetail');
const specialRecruit = r => require.ensure([], () => r(require('../views/home/specialRecruit')), 'specialRecruit');
const recruitDetailList = r => require.ensure([], () => r(require('../views/home/recruitDetailList')), 'recruitDetailList');


const company = r => require.ensure([], () => r(require('../views/company/company')), 'company');
const articles = r => require.ensure([], () => r(require('../views/article/articles')), 'articles');
const mine = r => require.ensure([], () => r(require('../views/mine/mine')), 'mine');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/baseIndex',
      name: 'baseIndex',
      component: baseIndex,
      redirect: '/baseIndex/home',
      children: [
        {
          path: '/baseIndex/home',
          name: 'home',
          component: home,
        },
        {
          path: '/baseIndex/company',
          name: 'company',
          component: company,
        },
        {
          path: '/baseIndex/articles',
          name: 'articles',
          component: articles,
        },
        {
          path: '/baseIndex/mine',
          name: 'mine',
          component: mine,
        },
        {
          path: '/baseIndex/recruitDetailList',
          name: 'recruitDetailList',
          component: recruitDetailList,
        },
      ]
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: welcome,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/chooseLocation',
      name: 'chooseLocation',
      component: chooseLocation,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/newsList',
      name: 'newsList',
      component: newsList,
      meta: {
        direction: 'slide-left'//需要左滑动画的属性
      }
    },
    {
      path: '/newsDetail',
      name: 'newsDetail',
      component: newsDetail,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/specialRecruit',
      name: 'specialRecruit',
      component: specialRecruit,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '*',
      component: welcome,
    }
  ]
})
