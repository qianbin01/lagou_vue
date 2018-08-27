import http from './index'
//公司类api
const getTopic = () => {
  http.get('/api/topic/list', res => {
    console.log(res.data);
  });
};

export default {
  getTopic: getTopic
}
