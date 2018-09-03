import http from './index'
//公司类api
const getCompany = (res) => {
  http.get('/api/company/list',res);
};

export default {
  getCompany: getCompany
}
