import http from './index'
//公司类api
const getArticle = (res) => {
  http.get('/api/article/list', res);
};
export default {
  getArticle: getArticle
}
