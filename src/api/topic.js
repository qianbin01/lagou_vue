import http from './index'
//话题类api

export default {
  getTopic: (res) => {
    http.get('/api/topic/list', res);
  },
  getSingleTopic: (res, tid) => {
    http.get('/api/topic/single', res, {tid: tid})
  }
}
