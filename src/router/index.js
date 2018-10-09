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
const recruitDetail = r => require.ensure([], () => r(require('../views/home/recruitDetail')), 'recruitDetail');

const company = r => require.ensure([], () => r(require('../views/company/company')), 'company');
const companyDetail = r => require.ensure([], () => r(require('../views/company/companyDetail')), 'companyDetail');

const articles = r => require.ensure([], () => r(require('../views/article/articles')), 'articles');
const articleMine = r => require.ensure([], () => r(require('../views/article/articleMine')), 'articleMine');
const editArticleMine = r => require.ensure([], () => r(require('../views/article/editArticleMine')), 'editArticleMine');
const topicSquare = r => require.ensure([], () => r(require('../views/article/topicSquare')), 'topicSquare');
const askDetail = r => require.ensure([], () => r(require('../views/article/askDetail')), 'askDetail');

const mine = r => require.ensure([], () => r(require('../views/mine/mine')), 'mine');
const resume = r => require.ensure([], () => r(require('../views/mine/resume')), 'resume');
const editResume = r => require.ensure([], () => r(require('../views/mine/editResume')), 'editResume');
const priviewResume = r => require.ensure([], () => r(require('../views/mine/priviewResume')), 'priviewResume');
const send = r => require.ensure([], () => r(require('../views/mine/send')), 'send');
const like = r => require.ensure([], () => r(require('../views/mine/like')), 'like');
const likeCompany = r => require.ensure([], () => r(require('../views/mine/likeCompany')), 'likeCompany');
const cc = r => require.ensure([], () => r(require('../views/mine/cc')), 'cc');
const likeRecruit = r => require.ensure([], () => r(require('../views/mine/likeRecruit')), 'likeRecruit');
const secretSetting = r => require.ensure([], () => r(require('../views/mine/secretSetting')), 'secretSetting');
const setting = r => require.ensure([], () => r(require('../views/mine/setting')), 'setting');
const wantAsk = r => require.ensure([], () => r(require('../views/mine/wantAsk')), 'wantAsk');


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
      path: '/recruit/recruitDetail',
      name: 'recruitDetail',
      component: recruitDetail,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/company/companyDetail',
      name: 'companyDetail',
      component: companyDetail,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/article/askDetail',
      name: 'askDetail',
      component: askDetail,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/article/articleMine',
      name: 'articleMine',
      component: articleMine,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/article/editArticleMine',
      name: 'editArticleMine',
      component: editArticleMine,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/article/topicSquare',
      name: 'topicSquare',
      component: topicSquare,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/resume',
      name: 'resume',
      component: resume,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/editResume',
      name: 'editResume',
      component: editResume,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/send',
      name: 'send',
      component: send,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/like',
      name: 'like',
      component: like,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/likeCompany',
      name: 'likeCompany',
      component: likeCompany,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/cc',
      name: 'cc',
      component: cc,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/priviewResume',
      name: 'priviewResume',
      component: priviewResume,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/likeRecruit',
      name: 'likeRecruit',
      component: likeRecruit,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/secretSetting',
      name: 'secretSetting',
      component: secretSetting,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/setting',
      name: 'setting',
      component: setting,
      meta: {
        direction: 'slide-left'
      }
    },
    {
      path: '/mine/wantAsk',
      name: 'wantAsk',
      component: wantAsk,
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
