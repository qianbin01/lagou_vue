import http from './index'
//职位类api
const getRecruit = (res) => {
  http.get('/api/recruit/list', res);
};

export default {
  getRecruit: (res) => {
    http.get('/api/recruit/list', res);
  },
  getSingleRecruit: (res, rid) => {
    http.get('/api/recruit/single', res, {rid: rid})
  }
}
