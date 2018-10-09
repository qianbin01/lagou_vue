import http from './index'
//提问类

export default {
  getArticles: (res) => {
    http.get('/api/article/list', res);
  },
  getSingleArticle: (res, aid) => {
    http.get('/api/article/single', res, {aid: aid});
  },
}
