import http from './index'
//新闻类api
const getNews = (res) => {
  http.get('/api/news/list', res);
};
const getNewsSingle = (res) => {
  http.get('/api/news/single/1', res);
};
export default {
  getNews: getNews,
  getNewsSingle: getNewsSingle,
}
