import http from './index'
//公司类api
const getRecruit = () => {
  http.get('/api/recruit', res => {
    console.log(res.data);
  });
};

export default {
  getRecruit: getRecruit
}
