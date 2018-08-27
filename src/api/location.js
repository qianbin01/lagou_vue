import http from './index'
//公司类api
const getLocation = () => {
  http.get('/api/location/get', res => {
    console.log(res.data);
  });
};

export default {
  getLocation: getLocation
}
