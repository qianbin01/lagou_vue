import http from './index'
//公司类api
const getCompany = () => {
  http.get('/api/company/list', res => {
    console.log(res.data);
  });
};

export default {
  getCompany: getCompany
}
