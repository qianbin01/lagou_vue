import http from './index'
//提问类

export default {
  getComments: (res, aid) => {
    http.get('/api/comment/list', res, {aid: aid});
  },
}
