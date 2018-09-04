import http from './index'
//公司类api
const getTopic = (res) => {
  http.get('/api/topic/list', res);
};

export default {
  getTopic: getTopic
}
