import http from './index'
//新闻类api
const getNews = (res) => {
  http.get('/api/news/list', res);
};

export default {
  getNews: getNews
}
