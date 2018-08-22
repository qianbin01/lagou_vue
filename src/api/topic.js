import http from './index'
//公司类api
const getTopic = () => {
  http.get('/api/topic', res => {
    console.log(res.data);
  });
};

export default {
  getTopic: getTopic
}
