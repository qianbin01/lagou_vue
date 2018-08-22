import http from './index'
//公司类api
const getTopic = () => {
  http.get('/api/topic', res => {
    console.log(res);
  });
};

export default {
  getTopic: getTopic
}
