import http from './index'
//新闻类api
export default {
  getNews: (res) => {
    http.get('/api/news/list', res);
  },
  getSingleNews: (res, nid) => {
    http.get('/api/news/single', res, {nid: nid});
  },
}
