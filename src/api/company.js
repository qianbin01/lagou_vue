import http from './index'
//公司类api
const getCompany = () => {
  http.get('/api/company', res => {
    console.log(res);
  });
};

export default {
  getCompany: getCompany
}
