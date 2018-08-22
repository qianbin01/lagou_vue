import http from './index'
//公司类api
const getArticle = () => {
  http.get('/api/article', res => {
    console.log(res);
  });
};
export default {
  getArticle: getArticle
}
