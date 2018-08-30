import http from './index'
//公司类api
const getRecruit = (res) => {
  http.get('/api/recruit/list', res);
};

export default {
  getRecruit: getRecruit
}
